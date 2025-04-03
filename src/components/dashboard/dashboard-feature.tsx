/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3ZKRvdZ1J5zfFqBkFKJB3Y3XiULVC51MYvR1vGYcMp5jk8196SyNGHC9reysv194eWwPwzAQmzXtWCV8bFhi1G8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "deht9rGwpB6oMm1LFfSgQMUzM9bLT5Yho5t8j8wuL4ENyCRh6ThhHniKFjr48xGbq9J699KJVFHwSkEQBUYB6qK",
  "key1": "2KYwn2BCVwDjMBQdSw5LaDagHDD5iVGY7VzFjF8qehPPz5VtV3WeqPdKjXu8ELSJWMhRbP8YNWYTkCyBhPXhpL9s",
  "key2": "2wRrW26xqLgjt8CQkUXJiGbnw4CZdNX51j3Q6aNRZmUsqbZGAL92UUipN36aAMoS9VLLqn5aDQn5WEQ9Jx2WbjUV",
  "key3": "7XMuFu857xzZstLX4181taXmMZ2BqCcBFhNLW2DcHS6t5zDCaxE5haeJJeVv6YEUNxyiK7iqAJLj28WhKmXFVnW",
  "key4": "5pvxkgoidkhG1v9en44dGmk6N5xafmXNCN27jua7y4tXePnvzDKaDDYFLGKW5twKFnxMouV7kesgTGrvUVfXAAgr",
  "key5": "5AJ8JB8nT2Qmzo9mbRXti43wL5SmDg2ucshMGtkLxoJBJSeqJEHDWfhibwqepTtrwjYdKgXUUPRnyAFFAGW8WNHr",
  "key6": "3v9CgtiUUBswYgjMHDpABrifBGMYMMXEaEgfEB8siDaWZUZ3D4aGdikgzaiS4ARcsmyji5X6sGM5UBWtoeRhBBLh",
  "key7": "2VYmSZPfQWz2p7g1WNWZ3iwgJnRGHZC2p6SeNTy3BYtit48zy1gBydsgprk6n3vT9S9hTxAyipvzFy8Q5vLAHbgB",
  "key8": "65Bxn2HS6816uLs6ZJ4xgsjTDPtqCZb54L6QNyJPAnymsfy9ZEwjoxudebVjsVnRC5VzejpGJcXSqHd3FaUb8pEG",
  "key9": "2YZsXL56Mo2SGifrXbSF9pqziYhvgS9eP86K1SkdqU63h2rEW27Bu7Fe1SHaZqARoKmLf1uMKsBi5THwu8PbhiCT",
  "key10": "48BtXAMA21dbXRcc5ZfLZeyL4W9DsuDWYJZGuAjHKjUNjodmfUBpZUEh5kdLBE7L72DS9i5Fh3JU3NEeNY6q2YhN",
  "key11": "4DWmCUvM76YydLoYq5NQYpx8fxn14wscZMmPRFahqi6tzTSRC5MEkw5cBYikwbEQwB9p6seb8YEPsFQ5Ep3q1zFo",
  "key12": "3tAh5Pq1peu73iEeDGDPBE8NjqFSRsf3NvmLbiSC5w4E5QZEpgMushvawA2uLaDu2Yik5bwphMCYXEKotZbHktBt",
  "key13": "Bz95s4N2tiwLZkUjj9QrnPwaCuuEESaMKweazrGLJCC7sCLvX6HV2Jez9sXpCqARFCbuP3xdmoQUBkB6Sn3MwJm",
  "key14": "2jMvCmfXssnmbzksCSowZkMRqEBthQZL8aR2pwjd6ZyCyvjqvt6d1wJzDKKuBsS39FusBL76EPDknWTepHi8ugPb",
  "key15": "nAxrGSNW5RDTgye8NjcTsq1CMVaeptrAuoVbjh1tVuqHi81wj8U1x5jz5zET4cs4KhCoATF7633F9ZJT6398B2A",
  "key16": "2XNcAgrHwdkEjoovrq4ebEfmeahpTbT5SrcS6AeW3h2aRow2EqgCwZxikfVCPxQBCdS5NGxmdrJhemDWRJsGVDQj",
  "key17": "TbzrqAa2Z42N5S2MBU83uN8tHa4bAjXwRCiJZbRB48oKQs4ySxtXtbMCpDzq4q7e9sHZZpzYH4tQrQypB3aPTZy",
  "key18": "3y8iAidbidJYdLD3UCHGp49CcVYrc6iVmZRBrLit6vN4qdBr7xCMzWEapo3VVLVvCJRUfvokTFxJhzX6YVJaSbTL",
  "key19": "5c6vfsVqwifF8bvXQxGD32GAiQoGbh76otef2dJ4QRTbZxbAbEnFK3sCKi7WiYogTapvCmUcoxFB5pbGt76Q2K5X",
  "key20": "3cDpwCT5KWZZgmuPXbnrDmLGaTDCdCrAYQoh9a7vKfsziFVh7FoYvHQbxd1dKtsYDdB1NdnYM3m3PGjn2ugT7P6z",
  "key21": "5GPPZRH5rGLK3YJ55A1U8Ef4PVTThxv93oL3ghkQUSjLtHhKbtaEwmguK9p53uzFebh4HTVVMBgnBSWgGYRKZRZq",
  "key22": "4jCjKNR4J5CPzyGkci3Sq6mQNqchfc4Q7LYubiJ3iRytzTupKuAobLGrv2PkaUGRvVSiEkUNKJpsjN1vQryP6iEp",
  "key23": "47nYWNpmoGrxiW87L27iyev9KqyfCD7Ff4AJ1XzjpCYbs6F8DNAMpX46MfDwuvm53R6ypbU1VWhcxB5LnSbU4TAi",
  "key24": "4uQUUNqg19z4Ao9a3hgqSPPwW9HJDdaN8rbk2JeLuKXes9DapyggKcm342JA4dkpnhAQMrHVeMgMB4hBEceritMb",
  "key25": "9GM3Ur31gNb7T26w6JQCLAahxeVpMjKBa12hyQAxbAsAyBEuWGWqFbQP7eYqVXyC5c11G9wMSDncz7e6sr6aHGt",
  "key26": "1WFjxH2t45Ed8FubXXsB7FUEkiA1rhWmbmTHWSY3ZzigJ3eVn2cprFAvFp648uhNgYasYVhLjMEtdwgqo61uqjV",
  "key27": "4Yo4bj74DzMvgUU415YV5gVpX7dSwyZ7AYogwxQAXMyDoZi4MMSpTaNQj3aZ6sLc3VrRHrEk7Yq1znDsotCW5Zhr",
  "key28": "4LWSfH8NgE36wdRdvYaCmRWskWyokw3QEoZ1bPw6nEKbe9otdCkgbfMMnNa6hb8hnCaAJF9pkvuZ6pxvxgnXKKMp",
  "key29": "5mcSLc1tMJnzXVEit2ax2JDbTHVDhrPyzHyBgAL5jSSJHPVqmDfH1cioFBJgSiFwYRUouYKeh5v3AY6BawpxTHhZ",
  "key30": "5xfYD74KPqr6a1DrgMpK9SbcQEwT9EHKCPpSTNLSf542AkRbWXtUYyF5ehmxWtUi1NqsjRoM2dbafgeLBYWJFnfJ",
  "key31": "4wmZjDGbBx296wEgArEBSPkMnGgJ4P4Gv47Dw8oPvMuntvWF9KnFHyyf5F2rQ8owyMrTkdAKZqh5W6diiRXXV2pd",
  "key32": "4XyUe1y3426GoaK84fmWejPFxrmWfQjPavrEVaq2Cte6aeMayZxs7HxJiGghW1ja8yZpj3bswoG7Z4G8fXSv94db"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
