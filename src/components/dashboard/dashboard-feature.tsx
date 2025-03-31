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
    "oZstRUWyn6tqD3d6Xt67sarYgL58X1FQibEp3XMn12Kd7h4fki237GQUo6xbjWtUPSWPxnBxeFUB7EF2wf8SS3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6yXULeKRnz7WzvjqCSwfP1xonMLp62pca7cPSFuqtQATR8SsVVpDpYbqPmrCkcdm2UyJQb1AWjY2137mUmQVSb",
  "key1": "2AEUZhsXhkCALKZawfo7YafqCXaFpYWTG9uawtEiPPFttLcuqHSz6LZL8ynSjqYvKz9LyukY2muNtT8nJTom52oL",
  "key2": "m7Ga141rBJX3HqRxs112DqwFu5M9Q5vNphLxcTyNvuUCfexB9GdkAoW7Sa5BCJDtNJPEJwDB3oQsBio5DifSAas",
  "key3": "268Cq4T3sABSu44uWeLN372CofTjDGBJNnNuwAhbhdWCidMEhG8JknjqC2FKsWFNmgMnFbLzFRidaV7DEB9gWgcs",
  "key4": "5vCMocRLkeN8AcFX5fjc3QtgBYd1QSjX1NGyndVaqYus3xaQg1RoqPgBNAmZyp18K136aPV3JaM1uug4KHdSaVNB",
  "key5": "5yY5TmaP56d1LtR2hvWWiN6eBMaV793SZGM49gNTm94o5hoSnxvzRiDHnAqVv7qFLf1HscyRtafexfyygjxQ2QaT",
  "key6": "3Tg7vzuSWRkQLjAXTyny73ko1EjeQ6c3P9CNq7SGY81E7ePGcgBQ1THMherUFu5WNf9zTvjKAXVpirZUsfM97CUi",
  "key7": "61JwAALPNfmijxNZuWtNyTdnbBiRcpMuSvMXkyoHRXuUZ5BgeBshsTyh2Bg4ca2pi1bwZZe6La6Jng5VRXwuyxzF",
  "key8": "5iMY7CRG2qyczyMm6CSS3YauvAkaBc2RGWk8aQTcxGu5ay3q1nH5PwVcV1HsEWFfzNNKcB4oq7UyqkRK6VsZMUQw",
  "key9": "2h5dbszMFVkK9q8pBJvwcFLtMwu7mMYXTQDYiz49jJwDWMMsNKNYiVbggagvdm15SGcuGgGmQV4YJX9NKJgCtpgk",
  "key10": "23qSbdbDCTwH9LZ6tdcnWmxb8T5VMpn1wRBqaeQ77RS3J1THfb83a3wToPXdb4L5emrmEp9zXQDbRLQU2DyLNryd",
  "key11": "5uzbJ4giA4vkqucK8G3nAybB4ENYWuzjDR1hsaF41Mpva5qeDuVqdJxZiqmTC3xjDDRXFxZ8nrPycXTWdqUGdkip",
  "key12": "3hmxHGXwF4zyetXbMbcSApRek6Z64TNws3Bud87qeCuve7JDBS5bsNueCEDZqZEHstnMSPFcaUzSrrz6pMhk3rZa",
  "key13": "47MJ6awCYxeNpyjGThwjRqusiVgxmoVqievCo2MnTBZFcyuuzCFzAn63YNv6USwp6MKMLrevPJtDv84j7JCSrLKf",
  "key14": "5pVhVQjzVnXdiTmwAy31iTt3W7w8HP3x9kDrAwz6xK1X6Xw7rMcAcjk1eiTuhfrQfEqZgVS8nqCw6x9iB2CS83CJ",
  "key15": "4gzGjPUeNsTy3n5vhx4SzZ6LrLcKmoMB43dG1wymmb2Hfs2u4L86YFDz3pGT4h2FPFkgQEWHaaUByVjvW6pv9NbX",
  "key16": "3rgMQ1Q4jU8uBkkq5JRt5sxmxkqAZaP3jdn1unMxvvHZHTQxchmAtxZ1dnbr7qtJSsc1ZDRZ2hW3T8xP2QpLBVZk",
  "key17": "3aNAC3e1zLPZyj4imn31o7EhtuNUDZCzYwkQN7WfhVPTYuYhgnkva2ZDWFkPZcr8zUZPqdi2NibrCKGiLBKVoEjP",
  "key18": "4Fn8FhEskVtefwYG5vJHAd9DBWwdYoGAcXYiuYhSCYNLqtdJK24cfrmtLFzhQtCdEvD9yypZK8u72SozoxAnTLxm",
  "key19": "TBC5kqhEir8DjRmGm17wNt5gxQebdU1HafQP226pP3N5uRbCziXmb2MnrujZSdqp2U23LkihRr7zeGC82gxN58g",
  "key20": "nmq8R8BDokHN3LtbsHJAAs6DCWQRQJZpVM8H3o8aLroEwAkPpUmug2oBVb42Wg7jjubaWQLC4Qpe1pW7e4VoD9U",
  "key21": "5S93ZAt5AFSKGq9xmBeshx2TDnhaQtwNH3AjaZMsCSbD9HuhxtStuv1iU9BtsfeCrJHkaGKuzkhLohuB7BBtDCnC",
  "key22": "HJYJb7bd7uedPQJYBTY9Q5nXeGTP4f6PyYQrW3xP3duZWCzyAoaN7JU9XQPtQjksNBxXiCynQqhZnwuBTmYhg7g",
  "key23": "4sCRLdeD8r4TfvaBjN4DjbGUxNqgRvhEGwJYhKkfy1sLDAXUqXuSe1XQqDNm6peunuy6YLRsfYcwXRgqipZoxZgu",
  "key24": "3Gr517ydWtuVWnsXWfXGBiZg9xiK7cZKsUZ7xMUzW1gnZSRXiywYd6hj94AuKYenUdwnwyFSMEAPZFamJCPrRLWH",
  "key25": "4dJsfRQDKCJNjDnAXWcmXMzVTm6Mnd4C9UEhp2n527Gv4rbDzEiAMCBsMwrC1PovcpLsfqnMrhHeQQYuVK3JJFHD",
  "key26": "2CNE9xa16vSZZmbof9sck5RUNAHJoyiPvXvYqocjvEc66B91sEx8mc8fN4qXPo9mMB89w2yeenowdm4PG3ynbpQi",
  "key27": "5yU3LTyxrYMCmTmfMMQe82PF2kRgir7ErKmrUW4CawWpVFVM3bXqujC5CesjDBsawaywF4AcgqCPVGHQWWzh4bS9",
  "key28": "2YGjDh544eBPNYrm3xtcgA8aAcDd46nDwZK4Ns2K9pkXwZh44EVVH2vQPhvgsLPdZWVSoc2TGMWLTtTX2K8qXWCq",
  "key29": "3HA5GpZr9Sh4TiNEsXe7PZcLbzMrmKZDBKA8m8GRpVp4TkdxDbJpNj3wA4EfUuYACPciywtKpFbzC3mNEnSQDfPc",
  "key30": "3xNiE1fAgvJdRVFCnxzKxUuJYQPRzNBsNt6cubV6KY1Hf7PCtfyLRF4y9dtp4VzmpZe37DNtyjLYbexHFNj5xTfV",
  "key31": "67fcuHJc9xTFbCwh428ep3tExPBbwKtqQJkEumTmahfcgM5c5EaqtEwdX5AfuXxqVN5BvXs1m97fgpYrQYeTPLqC",
  "key32": "2o42JbZV6nmamQcUZkJmt2ENrBCEKtyd8nEozZstcQFL5WKjQTVKzgmLNpcVgk7QLCWrcs8sjHu3tou3Gc7LXG3X",
  "key33": "5AFZhA9WDJ5z6iGTJuTuKZHS5kBKWfQVne8R8LfuxfSuZcUzGf7NkDAdXqVPVyYCiUZPUS9dKq5TcCLxaHkhXVtF",
  "key34": "3fRYHVv8jPehPBhvfgC2jRpYgFNTeaPBJpNsYNofXVHm5rZ8FPNWCFuquTKDTNkUMn2JgB7WtgUcbAsJr8tv5i2H",
  "key35": "4ge8LC8YFV2ncJpzCUzmAgihUvP3hejXVYhrz1tsjWx9MuGjn8w32aMdcgZMU9okX4mHdxWogu3PvmoJYzN9gQ56",
  "key36": "2FXkpf5X43NnANZwRDXMJkKCfxDSrNd2HkHpEkjAUGAUqkev9TnT1F3MS5ZKjjRUKwCkWKDqjQmfqCuzwqmZYnhy",
  "key37": "5RAeRTbqHwdVyvYqZdjgADuLbUDc7AEkJArs2YXUUYmF531Bhi6MFksJF4s3Nzz8X4aCigKLZbFqVQ5M3AWGWiH1",
  "key38": "33q5e4DN3hmumKepKTFJ6BG8284i4Gw15p3CNvZ5WgoinmsdsRzrGnXCXw5VazscMo2exTbk285vQ1c67zg7TZCJ",
  "key39": "28KWdYd7XJPK6fgsx7fV5F84nHDCvBsVs2fhVZ39stk3yje5yTFYP5nCbsyqyTRWWnwQog1NxVECqnCdHUjvxhFL",
  "key40": "5iRg7Hf44gw2TPZc4pBJkZZyd6MpS93SvZc9mmCTkmKdpf7RNCLdCWPSNcPwLCfADkeAGjX168oSuNsJH5oeAsWn",
  "key41": "rUP67ujNNC2kddoyXo5d9orYL1qmAWVs7PK3RKbZWsYzasfRVZwnfqTeQe5JFPHN3Js2iHaTtQPVrPWMDHg1CFe",
  "key42": "13nyZrGsEMDXWdW5Lhnkzm8sXEFyBR6h2kmkVVB5TwpL6soQZuvamBWZifMCHkLaikG9KZn3pRtxLcWoY2DLvSM",
  "key43": "3ZHCtk82Av3mtbkrwswYR8R7CknTxkneW1Nnk4sXx2HN2uTJqUecfx71DueKcNaenvq9FguswuxGFkx2T1Brobd7",
  "key44": "2facix3JaaqZkpLycwT3kaqVH8Q5vHXHzYLHQwr1Y8fKvPVek32rdNDcKcHgtj6iCfeLJpkvzp26162ojdCpwxb4",
  "key45": "2Rt6jyXfAGRBRbtdFigJ7Zo2P6aRdYvAWjUZ6XSowGwu8knzhk3GbZXpJBeJs89UGM7Kf5qBWb31efkNdAawum9g",
  "key46": "2zHrZG2yLPpoVTDHfcqFxQAx9fwwBaJwHuEgpFdRjVn9bwnD7DwvzPbUSvBh9KVaSYd4Z5ozSgSZ1rXvWhCcJa6A"
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
