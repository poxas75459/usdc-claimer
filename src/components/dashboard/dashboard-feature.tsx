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
    "QEFzQRjzQyR3aFUs39EdGFmceyyV9w3ZzbMWANgc97zGy5LPF9biofLyUeXfkufhcFCosgydj4DK6m238Earatn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ad6nYan17CAvA6zyjM6PjUe73FYEnxrP7buCnTsWxq1RQaAo4guUaJW7sZSEeTBECzyX6jW96NYrj58Cp98gjzc",
  "key1": "4FYjopkjurtxUCtm6Yc6VUvSyXbQiPNeGnu818uqK2PUBXJTUr55WC5N8hCzajSgj9wSSsuEfjiwNCjpVaHkyhkT",
  "key2": "3KFT9qqU859ATWtm5A1S3v1BopfVWEzWfyxgGr5RGDNx1K7TS3CKGNWcgwC3tTBFAHEAHXi961s6Keah9gsohwQ8",
  "key3": "sGzxAzFgsKoFTCB3egh4RqPWshEdsoAiqaRK1eP8zpf7rnidkja1SoPSgS7ebAR1kYR6u5LmYh9dMDb2NPAPsHK",
  "key4": "5pX6VG5PjS1UFwp1R9tJgbj4tEovPwxRHVD9td9bRhRmHEdDkTZLqWhAvHLZZvAgyVwE1Xz5j1wRBdKFdyaji83b",
  "key5": "5t4FDdSsDKQJT7Fffe6Rb5Wi23UWfLG8N1mXB6qYKpG59TW7HtHo7pupm5sukhXvY5s25NMChsiWFwC5GZ2w9Gyi",
  "key6": "2k4rJNsGnjJWbC4QEoctGRz8Fj37jMw95LgRSjWteVXrpb1DtNPJmPfZCCKy5RQJjrqkU1FKKXH12erq258aGg5b",
  "key7": "cTrGAY3YZcmQ7nNitnaTCnDFHdxWwapUiPwHNp7Fu9mtJFto1XsZut7UH56wswSY1hQ6NjeV7rF9Ymr28F4RErR",
  "key8": "3FLtEQCfpXnWKtREQMixdfxf7CHo55RXHHPBk4iYp1jMZ8EwTnCsJBp8qRaZWg3Qm2JCZjWnyud1jfnUeXYj3wxa",
  "key9": "KrGoiTKahnwnNtRN99jjQPB5NQY3B5i1jZUmHLUU6JiwY2g5smkJtN7p1nY3r5dCYkSeRMQz8bnNDdxbhBumHAD",
  "key10": "2LhYHRaMxbC7bPZ2BgQfzhe1gch3csDNCBCWRdxDiBk5NCvf9RDtkEgZzb6yT6g3YfwEA41ES67bupEj4cKiuxSh",
  "key11": "5omKzZLJXgUbjjViY1urKp55ZNs7uf3VecptWwqGXMBXQF3YcyZpcRkn8sAVGvBhWQYJZY3PVw1QRPxdw8jZubPh",
  "key12": "54KiHsbqbA6Ptr8LV8GTg7TEpSeaEmJMyKTNAo6kSLxYxY4YCsjXL5syEKppSoXMa363NbLYS5rPZXVr1ZJMZt9Q",
  "key13": "28ecsA2pVwgyVBD9ceRWPDaxC4nsuqLdToziTbtmZ4daTRu9mo1S8EiZhge1YfqGfu6Md6j2NixhZnsvGvUWwj9L",
  "key14": "3oX6SQUGdPE1uUiRxqv5epbWfi2DBZpHJ52a1Cx6QWZQPJNSu4BwWyGEeZUkeG1yZRmc6sfrCAcVVumqenFR22Aa",
  "key15": "5xtUiEhi8KGSB9ZFHELEA96tLvmpYbcqozDbJsdA2dsPgKFjZBEPXJJWBJwRdDw4wzYa1TGGejPBhv8AyPEYWVRJ",
  "key16": "kjXBSpHwhAEuoU6WNeieidnxatDE9PBhCBCQ1e6q3uFn8R4uY6o4WwbfKv2MCgYGB57vkpnFAJD5WKG7MpN1f44",
  "key17": "2DjXYot1tVxJqLBXg6K5myfo2LtPKHg826RBH1Q1UVZ5Hipi4bkPFkywtLjjQyXGGWDk7hwVnoNqS1UsFo8wgL5d",
  "key18": "4PAMaGWbeqmvM5P8DQhcamTcbnJuCvQevUBjRNXtgoNT9ALAsqMw2Z8K4CgZ4o2MChe711jZj2oDTdzgxpDSJqXy",
  "key19": "Feqi5niQAbiwTudtHFZUakNGwe5FTpNrMWLMhM4GL36554CNk1zFRnRTPqY3nCPJYY1wgwqumZgWqbUFvFUny23",
  "key20": "S1L1U6r2ufYFPbyVEUeF4XdEAcDtLzUgES4zbvxVpP9v4o9ZvU6KSDW1qAuFxxNxsAwTi1LiAD5Gj5EkFDUYCuc",
  "key21": "5iNuBdq2i4We1AjXX7Xwxw2riGk2mtXG5r7GPAKGw6q2cweVKD7XDoEwirb4dSx9UAm1nPfAVyU5386phdV4seco",
  "key22": "3LZttPvsBcgYun8Dgmh1GVnToEvPBEZaW2wpZAHbzNjuxThe96THrXTNeHpD5kZKT3KzNq1svvRCSHfDAB1RYrxi",
  "key23": "22wD6vyn3DkqYib6He3ubQsZbpsqspYxbZ7WEYaNNG6pLopEUCpUUfc837xqZHoActeBYg8QfhogKpnvyP357aPN",
  "key24": "3AoekucShvZzLQMncu5zc3Gg9JH7BLBZii7oqCUH2JhvWeAyFutgmPfHuz32ze1ZAoUfs2fharS5hvUUeBccu7GL",
  "key25": "3pKsK8Shv49m8EtntNoCbpr5D2qsfUU3szdHpG8T8VhC6mCwNninZ3WLNtKPVpwAPXsTDAnjrkq6n9EHT3jU6PQH",
  "key26": "61q7fhtbyM43XSuQdyJPy1g4AgPoozJNNDJ9BYqqdazRxSVjaxi8RGJWPTzE6erWBTSRaaLkypGYPdBMrb6gfQQa",
  "key27": "3tsDW1FwY1EZfoVPeeyatWRGaNaJxrLQZWbwsCHmkqbbtEktTepEwiphou78X8SM6YGcFJ8XJn3AGX4XarGQoSmH",
  "key28": "5q64wPqgwEzfJECGMiuDLddS8kWpVQJwo7xrv8DytBEaTTn6cwapYcA8na83SpC5s5QpFZsJQR3K4VXq3yzfgALx",
  "key29": "3QVL8auvWgCtuxjDvkeLdeHh312r3JMRHz6uKMk54karnpmidTkv1AsygNUL83sPgzWYgf6YhyCdzFgMjekvNn4E",
  "key30": "4MeGmBpgUhJBivqudTYS6YFmjHzytiBc3ViV4wJbqywuoBz21dHagw11J1ErKNcbEhbsHLUCJtRevtK2uhu8SyFs",
  "key31": "58rkD5Rgw6Hxwcw1eCFm5gagsozaT3aR7w75Sm83L4YTvgvP24ZXcuEkJtATihTWyF5Uiyx6qx37KHaaTM4tXjFn",
  "key32": "344dX6EPNGPm9MTij59G5WomvBZZ8h7A5uRG93e85D4dNivBg61zRv2gCaWwgw9AVQd11LwVGETSYC3wkxWVAk38",
  "key33": "3LD2bpbDLgY42to51FuFSLgQriAJgQdmQsqHzVDwfC3Y4TGgFb2qBFe9MvsLqPNoD7uD8sWjhD36J27GZLH7SBRu",
  "key34": "67WKdgxxLKvtG3uH3LbLCwfEFaji4QsZu9so9zXm1HGZH7bfRzLDJDdxT3eUcz76HSxZBWMDoRYuimgwsiGfzTec",
  "key35": "2RWEDwd6Spgq3MH6Woc7Tn7PCVAJbe2NLzGRtKx1GBm9cUaSviPWuZvUr5CSp1FfKZrXWH85fLAeQorscDoHUciS",
  "key36": "2fcjnfmy24mtZtmgzJF4xSa53cQJrJd4B9XPGBjVaxxG9gvbJia2xBsU6q3fJPptg6JctBFrrvbXig8f2KPm7zcE"
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
