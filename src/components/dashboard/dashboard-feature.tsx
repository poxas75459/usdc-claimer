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
    "YgAG8ub2nXBKz3P26f22WqmSVedHqUpisbGu5etNBDydwCmyQ5v93ySaaND98qhaU6LWE88krgL7cziF6i2o4aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kuNBG688JjVFDCuWiZLVNgwjJkRqyMfBTR2u66Pc7VWh5jq43vLZJKzg3Ub8QMyamY91qDMERE7oj2cdJz33Heq",
  "key1": "2fqrS5kQZAHYDiqTchQ9hxxjX63A8YubwyNs4kTvXSoeF4G7HruRWw57yK6Pdop3DEhtr6qasRBXr6kLC3PfPTma",
  "key2": "49j5yw3ZiaD7zJs6TLJurM3b3onB5875VzYv22p5tg36Frff6fVTXdnz9TfP2nTvxJyarNhBb7aGTEtFMfHdzfeP",
  "key3": "3wAk9adqhMaBLjfjTq6hHJyUWuQ7f4Sf93gmgkaLJaG3C1SwFWMFgQzE2T7S5enb2Qgzj9wpgEh7RKwjFWUHd4V7",
  "key4": "5QspE5YAvya8d5xDEMxoGaowzFjERRPydZuwVP4L267diSfKLPMDizGjfmztaa4spZuD9nfHQ4TuVTxzVw7ZAM3D",
  "key5": "2mym3PA39CTxJohKDFQNAko31s4CGwt4sMMvxBv3QJAfR7XCK33ajFJ2oZkNp3TLxnWjqzC9umqQj9EGPr1jwbCt",
  "key6": "sJh6nxUHGV77j4tLv1va38xTcb4dyQFqctcmGJUzmXfciXTJpa78KK1U91VKV9hkm4oKtdfbN6XNbXsTgiwsne4",
  "key7": "32iB3DBk2zaSJ4BdxraNS5rQntK3DtUW8auUV6KuoK9GWXjD7cxyVvsTzuDH9b7hL3pDFvRoVs3Ri4E12rKKfCxD",
  "key8": "5hzcDrTfSYYFtgBVmVuLvgKT6PVHmZ2sMaW2voaDkhfGTucFwPyUqVENLnxjXSbGJJuh9ah4o6dzy3arm1AeHqpb",
  "key9": "2LDaj92YEtc9s9VVsqAs9yR3UXVgdAr3qPNPbCfAPNmdfdiL6y7iLUAxYF1PgZJi4w7YFP1McQ7Wd7m9QvSQTN9i",
  "key10": "4fjojKgkKo2CxXdRXpme3pqZ2sLYA1xB35PeRSfPAHKRiCxfLbi4LSLuYsoyjP8XbExDk2aBVfr9skzMvPKd29o9",
  "key11": "585iWa9CNmdraYLPwXbVWLTKmwg1TfJeGQiyQa5keoyabNB3JcApnkGSXvY3d26iXBvfKmwo3jgfULKkBFpV99rt",
  "key12": "53QNTGEQdReutnCixR2XWEQesT1PcuKH7D9rzza83d7z4rz33Wte57sXGniu5pWGfS22tLsBWA3WmjybFqCRdXH9",
  "key13": "5k2rwDJcDVRudPt1kLmBhrFB3qJUKa5kGgKyyry6tdfXkxmN8u4JefeDUyY8XZnDsfF5AttVJxWaqH76BRe82Qzh",
  "key14": "24TP7Br6g29ubRRhGKdJAKaBcss7HLTXcmXJbdcVkkayNdUrip5TYwNpNWYmryEkKJA2q7Wo6ZK2TUGMo6eRhxgE",
  "key15": "2X2P3Eyp7toJvwXPRy1Le3Lns3kGc2MJbLCz9XVQNpcNL3kcqD3ktD3Ffu726qY7eJVLyuwsojeYSfmrLaGTtW36",
  "key16": "57qKahHQvWi5xwcKRLwTcXb3krLCJaqnRm9ir42TULnr4H9XAwKxZDhtpZwAdMXRUhzWYfp6JnuRypY3R9KRZ8t8",
  "key17": "28abSernuwz6h4mxULYdUfkVe3DQ7HMfMvit5nTX81D7stuvVA6v3AxhXtnvq4wxoQWv8BQ4nmNUGbiDAUhZjsZM",
  "key18": "aQ26zEae4ByA9sXd4goXA7Q78i4sZgLVHUoZyszmTq9678nHL8ceHRWAfs6hsHBeBymgUugwbLfzV8FHyHGxNsz",
  "key19": "3vnNVLQEvk3vBF4vYrWUWP1Kgm4YnkFVLhBjmov9p5vRj7N8V4TDFSimBwsneWHfbJpEBKL65MdTbptZGSkVfX7s",
  "key20": "4F7dfggsihuP1TRopfVdd17htjAjHgPY28PYAiRQ3fo59QRLHHDHvrqK3fnADK5nCGimhkDR4k2rzNc4Zzo624RM",
  "key21": "4bViLVcYbgdbwz6imB8FZjvmv2eBqQLkPzN1oFeT17dAUNKddYgrW7XAQycDe9oX974UqdZ8KDoUHbz3c33L9B9n",
  "key22": "9Lj6Nnbwz6jeNabpTdatoBCMeiyCgCGKLKvesBCH8isKb9LwdKrPpMSYyy4SdNiFrj8dbo5nBZrPTc4rXj4EZJz",
  "key23": "3NNKbCPsg8QRbeMGmKjUcMzmxi2dvVBSzENK4EEgFZ2a5r32ZsDrFAAKb2cERngb4cKUFnaF95W5EwpipvSgkSpy",
  "key24": "iG5ujiGUaWYBihgtcEBKrbT3oFdDL3Ttg7v9kYBLxaXrPAmWGZaKUtqJH9djJRbuJ1MFFALoqCESUe2YgZxuPwt",
  "key25": "3CzGBdQMCSLMx2yDHVKAGZR7NzGti4wX4cjN2E5rf9YtxtLaMNDcyswze1cWyQmHrfaajMDmmBhqvMvtKdqAY73",
  "key26": "2aViwxAa8UmxEmW7prkGqHDRwJX2g31fbYtXRn7qWKtDeQ2uS8X4zbMMMkrZY5A4qcg5ZFZqET5JvKxN5K8TKFx8",
  "key27": "3uxvHdVYzSVfwbFQC5KETGLVGuDc7dGefrJnoJKHP9hFzHJYwVqruUdgXoQr6umNMtBS764okrfjh6g2guqm3MAs",
  "key28": "5PnA4Wufe47NaVAhKv9sQc8PGY8FYoSfXYBgS5xBiVQsf74rbcsvt3tpUvMSRrJv8KE6KcaRcpGHa3SFg9RY1XHL",
  "key29": "CPwEATACF3dEYuQE9ieZ5WgGrMagxwcN4utttiuTKLVv5s1aJWKC3fX4AdB6d41tjKnSsn7FjCSnF2iRmyDy4RD",
  "key30": "2oUeDVZ2Va9gvvD9WGPtNXFfqyDD8eoF4ptbKBzVGXxQwAoPz52xqDLxxkYkqpXqWKrbpgkYZwk3fJeQ6F8muvBo",
  "key31": "5QEBPZ2dQKbwyZDLyEw3Kped8vSRjFJLyucfQWeHV6uvfCgcZXdKu3jVFca7g8ejveZX9jvKDAUwkE3JiGZtwKsQ",
  "key32": "2wVn4MFNyZikeNuVA9YrNFT8CUf7iZzSR139ngrHa7tYCDXUQvgMUaVG4ycuq8CpsZ6sLrQZW1mns1ueoNekoURe",
  "key33": "3oABQYBCe4ppqumheaSJeSGEjGLxqQnhWFaENVKmuphHusKPD95ideLCWjid2eXQiCjVEseUtaxRGqZb88uYFPQA",
  "key34": "4iAL7VFQ1tWv1XkZ3MNoumfRF7LCtoVkZuP661qt7qwbZ53v5z7PrQU436QVNgPb3Bp2q52rSLGhKYJxCtYsLNbt",
  "key35": "2vxjq3vRPbtwWFaE83VX1tJYxQYoVU2DYLyyMtkVVH4L15f7RJ9srEsc8nM4z49TTzfMuiDxqM83SokueWirMpCN",
  "key36": "4LnZ3QGiVZcQRsrewT8uT9jQ3cMZeTA9NJzFSQjB9Z4tgdJnFK3KHxgb7xT4bUpic4j4y1xVPYfpsDdGu7xuDERS",
  "key37": "p7X619gkch1G1gcEhqKsepokoFQPmcZNZFwh8za2dxDWKQEgoWaH21KNzPHiXNCWVWevLVgu2n1Z4jfoJAdHTJ3",
  "key38": "5pLE1eeHBZJAR9PRAuj8AC8iKUoAoZRT2iBBYDbWcqBTonerBp75VBhvi3DuvvkSZLjuiZkUeh4U2wkxiSDF3RSN",
  "key39": "4RAykiB1MyBG7cT83amv3MCyQZiBbNHP2kye91FJbX5XDZDGUYB45jDPhPCMbCoxsBX5QcWv7W4bctc7FmP1nhB2"
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
