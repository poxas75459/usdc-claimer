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
    "4ASmNrQqxUAxRezwG2SHFEqxApL9kdyAsQXUwkUFj15gsQCGmr1HnF6HHfiXugGqS68zLRXjEbTBH4eccSEMpEqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CG8KXXwaHwjELEMPvkKy7A9Kere15i2bdo2QTrNPyCfnSvecS8ZYjjWJ5y6aLfQRLBqi8b3TuiFCTcb97tQMBji",
  "key1": "3FX9KMWJ3ioE8BsvN35EJj1YCuaNEkUWm3ABT7VVgCARfzMNDFeYoD8BAkAupqvnghb3yp6153KmKkMk8chE9SJs",
  "key2": "2d1h5UmXkUcoteTGyjTQ3yL1ik5Y7QA5aB59ALPVtcKJwwSofN8jdYQWiVCRtwbdrxT8YajvkunK1fJ3k3xRUhLL",
  "key3": "2zVPjcgARJxcBSpEpxPiVJ8LCr3p8dwoR7eDP5xeNaKfBzgD7Vw6RqcU2SFz5z1QGk1wXPaBq5gLcCPwuTaJCSA3",
  "key4": "37FQR6HmhT3MSKCfgvZcS98MMRE56EVsCHy46XXfQKGXfZULjBekSRtXBeKPZqFfRb8GwK3eCJ1e7ueGVz75kwL4",
  "key5": "2brp79vfRjFXMRpu6WhCAJ3TG1CmAdGQNw8VinYfH7wWHZnXUVKhN36oeSyQ6Pj8kQsi6goV7tS1bgibDWN6rn5z",
  "key6": "42m7zUoYzJkZAHGkurUc1e8fNzi2NQTbJcXnNbKF6q5EUzY39k5msSGtofvDBbctRVP3HBZgF73rduKgysWvSkmv",
  "key7": "4VZk9UsbfXhgGwK487TsLi7UTfUXLjhffFbTzKYdNJXPNcgK4jXYBtPpRB9Beexkw6tLBSCV4pbLGpAERAE7ftQ5",
  "key8": "5aKa1qNNvh9HjLWRrgqKCRsM1GX4urnucAAWZFMVdSwNQ7qJ3L85FwH3zqyVXGZsz3avBwZAaKPKoD8gsf6MVwqj",
  "key9": "3VtLHBp6cPxtAzp1Y9LpVEgaXCvKGLwDZtuYnriEUoYGEfSh635kSvswfXQ6aBHt39hWgzWpATuXB2jsStGNzkuZ",
  "key10": "3syffamFwC5y6FiPEAr1TfQ2tar2QXSfRTfQn8FaPuBj6m4XGgPLnpisTopNzwFiAHc7KNV6UZp5ZCHJTowj2Xgp",
  "key11": "3uqg86q2eEeu9jzBaP1h4bC843Jv28xr7Fgm6Mfr7KeSXxL2wRZDup511QfP8huumLE8NzCywtdNrEQycVfYGaT3",
  "key12": "3rnJgLDXkXD4XvQ8mMNP9wStTrnEh3nV6hkwZQAjhqthjHuDDEGqmGjg14K2QpP5sAQvG7ryTob1Yq9vyF4X3RDb",
  "key13": "vJpHUPjM4kLZ9NPPoUdUVUN17ZJPRMA8T7saApS4r3cFyyPcHDceD84ZLJLAh9NvAmY577KEjJaKFkCRC7Bax5T",
  "key14": "kmAtQNvayDRukJ2z8V4KKcRAd5SoMhGUTNCgbhVgcbxJ2sYpdzEesvjA1YFyWcJes7zUosr53cPTGpXXvfFm2nD",
  "key15": "zNj4cinCW73LqUW9iou7LjiXwcKmnS45dvm3ofiRGVsngazeZHUfAtp2oqvJZ6FWoY9W6Qk646eRBaFrRdZF7vT",
  "key16": "gY9mmMnRhmL5SC542ajBoP8Try39DCaMPzR7XB5KrrVrF5yTzRkZD3c8YV4ojwWJR4Q1zGNDWN2CPRv91LNUnvh",
  "key17": "2ydxusPsfTBWPh4HcSVb7pZpK8Kv5eotjG1MDeJUtSVQcAXP22AmKaj5E4RHjV5w2FWZeWxeX9eh8wQ2zd5mzr4Y",
  "key18": "4PedVnvpFpP2BGGjL2EtZSyJ7Th1Vh1eF69MinPdZeh6HRPeLfXXXYTUVY4gG6mXc7wHEJ8cQgaugUrtibJAufE1",
  "key19": "5s2uGaJrz6qnDcbuSCX7c7ehrXDchiZFJ9o1YKe6Lj92PCSuhJuNuoL6G9TCftKE3m3EX4xPinjz62uWXK3nSHiG",
  "key20": "3P67Rt9jjt4ViBMETMsDSnJ8cLbJX7fFgTPbiYnXjo3XFG8VHsvrKokwNCbQHhj4jbmNh9kRUWtByN7vCSqHdm1h",
  "key21": "23hzrrPCUYFxLHpnkU29z9KT7zaqSkwDTw3exdsFJHw9eHaiboX5CCzVF3BnZyAkc9TusPHCp2XDRZC9tUKu5Uhx",
  "key22": "FFHECB2fSVG3WnWoAnX2ziEUGe5mZiNLGSt73MCaSfJuSt3Wf7zTsJus7jGF8Ne5DWRaggyLtDis2qqLDW4c5uY",
  "key23": "iDz6z2zpZSWGBu2QzX4CnfPogbanib2JQaDXCLpUQWgVWg6DhoC3WLNLdhYCJJEj2cRx8oZyRsSveYgF2t5HgJg",
  "key24": "67jwW9y9qCDNB39yHiTSWSsXFtyWM1SLSs4FcEuKWxA1eaWgSQu8A4DVFP42vMZ6oX9ccUQY8tVx2z57ZqzzveZA",
  "key25": "5faDBeXoapPYh94X1UYTtuCHxzihHQaUcMtSr3RmjdhTpQPQYqPVaf28UzntVJE9YBW1SevJoFBRhA5eGCJ2BRCG",
  "key26": "34C2SNYw6SxjFfasVDg8VPGFYJyrcPrs2ZBLfc5y6oxQAuGCKUFPf5XVjMyxStkjSBE6ag9she4Nu1ezzGt7xe6k",
  "key27": "62kbkUUdU1Mei8bFiaojsHNGu3upxLTqp9qksVnHsDw4HGQsxaqb1SFtrQ7STeV159Yp6H1tJG1ecWWCfNezUfSs",
  "key28": "3YNqgtwRnrdzPmRpGArHpb9oXLpqn6iTog4otZowns8L35pPRjZT6oZxmXkwSnrVBobyXsSQxzBuzkrjdapJcHpH",
  "key29": "5ETaGAGpgdSXvLtSssQHk3JUWCVp1WNHpMLpav7WuiSXpcWPapq2qhRf9E6y99n6QHM2yfgCSpMPgp3HnS7hSE9A",
  "key30": "3uUBD6FENCbNHCsaYYmFuhEWF8rrjctD7r3RiB6R9cLtxCPtNSspTxwTX93jokoshbavLctcbNSKpHZU5x5XiLot",
  "key31": "41xFfx7f4nTBCfYucNwsvGMpQwyzwPb7XEULKkVADBAT2pXDTRVsu6R16LdimqvwJbmPdbBdSxo2gfoLLFzosxMa",
  "key32": "wVwGz5kCQEt7UXx6RGJWjCt6BZKDSrcMAGrWjPpAMJdRWGF8d7ZsDpozm8FkTRypqcPyxfhagsQhH7Qdt9eVEuh",
  "key33": "Sgreyj8W5Ynak7ofCryBEzNPSzcoe1ARkXM99jeffE7xed4SRP8odVfPpH9SDthzNmrhv8ARURJvCf6BK9jhyFm",
  "key34": "4fxiQwkVzdcQaWwPZgyCaUdjMAJe27V9ZVcZemMYTned5onhb5G7pWeUbkkQdFRmqQ8LzhbcN4r2TogwQToFdRvt",
  "key35": "2JDDd5cmRVzUJYpQg62jx8u3PJuVvjCrZ1C2Lrk963EMjzUZgpubCu4Vosf3eNiDAVcJ2go3AVVnHVcwoh9WW8hE",
  "key36": "5o4hyfUWDvJ3Gq85u2FpvrBFk9aQPLffpymUFTVfmYJ25ZswBWqJtRLPAqvHPRd3EYcUqYtvmC5E7SigLxBynCRU",
  "key37": "exrnDyzoV3oBvP9dujx42knLaoLmPBJpTD6GBZpckrJa8Fn5wHKJtwchWWh8m3LsadUNeVZJxrFe1MbNPttMZ8v",
  "key38": "2VKydBkQ9Hds7BzhJaDfkFRnK6Zh4xk31PSSui24CrAoqsQSiyo65iMdphwecDSrXCZSeAZfKAZeUWjtj8K22uHj",
  "key39": "Q2BG4w484HLim1PCz2HRE2rYoVkbHX5VoWwLXPHpRwbBc2pCVuDDuTRg2pB5wkGqQRakRid9w9K5ZpG218dDfd4",
  "key40": "4AfWs5TFA6QgA1kEgLwiei8rGxqDHavyEedee4Phz32TqAbarMh7wLbPQ4toG7BGa6KNnuiLDmwvFRu8C6ursvAj",
  "key41": "2PtrzNMHvXGzHevvceCcocF343Jv3X97gTmsnxWU27wfM5Tfa5dDEkvgJa2VERJ27j43NhjAiCXeKnsY2THnoFvD",
  "key42": "4NnvXVTsNQDYKUycTDWXaGGe3JZKRvrxTWEbQyXhHzyJkAunc2HAfkLJWkXWNJTK23RNUNf7CyaXzoDyrZEytd58",
  "key43": "4VJDiKtWyTeyvSNRWHdCpHmnCJQFLHuVGGepa638tu5WWgTCSwmUdsy1ycyqDF15K8NgVfo7i4urs1eDXb2BMhQp",
  "key44": "EjVSd2mvjK5DgQCFbS5DtjBSdG3weAG2p1dsv8BE7qALcDfZZC2MAcPzPsHMPBBnnuJz1TYk26kRiXYRTyZJXdk"
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
