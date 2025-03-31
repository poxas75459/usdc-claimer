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
    "2w6ttucqRvdmLDCxBaeR9TnZZ8nuqbXjETc21cHVRgRD8W7GUDJxXu77ikaU9bXBZLHef8UzeznEBNCYmCF13dbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21k11BGeBeBdrbo9AMbbudaP1KpMWRsMsieswPwda2jdbzidebit6JnS8MqAny4oKk18MG8USX3tZNN8r7JSJWCb",
  "key1": "4PfnVxyZkygBnRgyNFkZAmaaPcFGAmjhQsDXHTk7FU7nVmMz9a2BC9ZYK9UCCLp5eozZ1J8ChJDnF79VQWjzpQMX",
  "key2": "3QSAXUnfwhFaxuL3R9oY6TsqLdFzjLZhGUEKdnzYFgue2qwSZtFbFZaSzZbyMG5U9ZF6PKNKUx7vjYV3bHcMKhfe",
  "key3": "2qwoXHi1xaZqZy2fDYFkTxRW6EJDGLqQ3MLrd2mxitn8aSr8RcinKYiBtQFajnPqqCsDBtR8hDPqnEgnY9Wymgo6",
  "key4": "45qt5fPQzLMRHqccd7i75DbWNN9WTu2ThQGj2bgZviAV4Awu94ekqgSu3BJV8QxSJjfyqAbMLLpe3BvjzRyfJJwj",
  "key5": "3aMjDbeKBVvVhECR6BN59UfPx9By31KpKtNFTxQ8M9kwbWV41aWUNJ5xEmRopC3Nc4BuDa2opkyVXVjDD2GvoAXW",
  "key6": "5d3S3PHcsSoZFdpv5ohTL1mdXxxhZz7co4dpnfvUPUgaQi3sWecDbS2SBAtm7ykZQ725bKN9MmDLCNtc32ZR4EJq",
  "key7": "3fEC577TWWrYjUg26UtMzPzwuSty7qwsbzQpTgUc1aKnWPPxLpqm823Dq87SZ71bv56sX7fPhx7K6JhhSAx2ti6i",
  "key8": "5gTNhHFp5aFGsNWWoDtstuhtvciGW1VspDnGxTMpiC55oTtKjKziE5C5Tm3ZWDqu9fYzu2aTpmeL59CVou2dJp8k",
  "key9": "T24G85rsjVwAxjpQRY5g2JVv55b6J9u7YPVJR8isiZhy8VBpLpKmjjfkSTFVvFC2DiSpY7H7U6f1bvyAsqAwvDJ",
  "key10": "dQZLxn5kcc5axfS7m5pMdpZfV6bejHftFzvCg3ZNUyyLosqHBFFYJaKkccyNot4uuPMja6uqLKy75gBcbuMuA7K",
  "key11": "ugLDasPKG5dXe1yXpcmrc2ehXS96ey4yD9z7VmmzNjMpvhQDk7eEdS7iEX3hHdfYt9EvDLedyE6iztSPhbF1FFy",
  "key12": "4ksgB4u4cfY3ePUanW5R3sXvavGEra3pxiVtFDCKou1ZMhWz8ZkZWzNdnhCM2N2qwZ6p6bi1Ejb4ARmXgUG2vgVG",
  "key13": "3NP1CYYWHSZgdq19JtzuMgSqLNBWxM4vjzDJ36WfoEpA473yuGwWbnW6mPgMtRAHhTVKU4CaqPeNnb58PgdegoJK",
  "key14": "3aZSG1gVAQhrMe5zVK8h7bfUttndbnL5p8xnuarARXgGP6paw8g8jWVho2nzuWM8oCQc9to3DPFn2tQJbB3xVPum",
  "key15": "5H95MPqvHogKUmA7hhdpBE8rzcUakUNSMzgFhVMwiyQHrbsSgZBnMpEuQ2882vxbMGuoNnTMwDdADTytgDKrY1Kd",
  "key16": "5xVdDazdZj3rxVs1iS6BKA6ipxEd4oVXyWdhomy4dn6dG45eTPStzVTk3Pb6JfAkGaemSrAMTwhAfaZFwBtWthd2",
  "key17": "361dU9n9zqF89h6q32r7WtdZAbKuay8qkCdNJs66kTpKNKbmRDpJqGXCZQwnFgWWvCHjUiCtXNJXGrfzYzd7mfaU",
  "key18": "3q96zvcZMNYke49EJ2cTsL36sok3Bk25e7Qg5J9LBeDUj9W8EPK7kTMpFh8mLEpJgzR29kRkGUGeZMkiszwrcEjZ",
  "key19": "4QnoAkFt3v3mjpKduvyRnHNifEbZWDDBQceFLKKwhtLc2hQUuBvsFExMJYSaQkeNyVGeNK8ag5Y5VEnpujh1T13m",
  "key20": "5BZ38Y3pVCZswJU5UBzzqfu8VcMgR65nBqQ182YivdEyniTchF6expMPZYh3JoNN1gfPaiETaNuCpmLpj92FSWVZ",
  "key21": "5wG8hwyDx8dDUac2umY3c5jDWiGZ9sEgW5Aie6BhNXCx8oC8V6PY87gn6jnAjsRvfK3qtE5B94i59LZx7dmHZ7tz",
  "key22": "3gzioLbibKFamBsAqrfrGW9RY83M5brRSARA6PJWWQqZNjwQ9Uwzqp5zHbThVa3rMZktEG5isrNbL1bJNptF3APz",
  "key23": "2KAwWbqnGC8htzDxHgtTdA1EmXoA12FUa8mwbqoS9FYBnvuunW51HeDBTPjRoiqNfYuV2R1gvPumj9pzHABezzq2",
  "key24": "5iLDYoT5T1BEKGoNvFHz4Qgjmggs1xXUThE11aw2zJhVD3KoSLJLSXLskpWewzGfrKYg864oibZ8ZpDHxKc6HPLR",
  "key25": "RPJKTD9WsnLeTSjRUZp3HMLHvpzQEE3PU5D6Gqka7q6jpy6d4QC87w3ME4jyUqVCts7SZyma6oLUEx8KMjpZKYq",
  "key26": "2Z7dWhk9fypzuDxKqgxHfQbajui7Bf5PVxCCBxEusgvddHzEaHVGUXZwvLpa2Bhu55LjC2KQ65ZqiZE8rsh4wyXp",
  "key27": "3dm7c8ZyRfLtaRK9KF2Yd5TZFG4JV3dR8hGQohEDZg1E2uDhjePLExgPFEBupaG52aMBz4uN6RaTaaJpo6Pzk88c",
  "key28": "wXe3MtHzKif3DFyuhbtW4rjqsr4ncrdS2m2NhUC6EpjiYNCrZiNfNAFEc9eShqTSwC5XYc4XVQwVeUjdbPL8mZg",
  "key29": "2Kuppckx4NGVt85FARXGfDPzdU6Jw15Pss2sFzuCcBdTm5dhRMoGiSdT45jEp6t8qBfYkwzCu5NUqiGSP5ELAWx9",
  "key30": "5zCb2z9cZFng5WgraxdoYboiCwhNcSrUm3aY1EuQDJHuYDVbyXTLwfbGBa5nxuum74sbHcespiiUekD6fX3TZLhR",
  "key31": "eQFCKpydote6JZjciDppsAJkZCiBfrWNBTwaxf65meXrzo6WtZDXNV9vw8cAryBCNAheF2HkeND7GRVjyimjLWi",
  "key32": "49fR8rxiBSBKG8drUXe2N9nYMw91ie72MtYg7g4bMQg3VZkSSimXJ9A5ax5vVL8yp8BgCCmMZzaPGVatqA7QdZZJ",
  "key33": "4SLEjZc3ZfNoQop7BBetsNaQdjMg7qv1VfmFFNzwoLFsu63FadAZdADDRazui5yTBUFQH2nPJpa9JLckS57CzSuM",
  "key34": "2kqN53gJ3vDxHgNLGZpWGZsziSUYtG9Wy7N5mkQjjksuT4NGyaVyFY9do1ZvsZW3CMLHt4swaPozVq3ppUHwWeP3",
  "key35": "4Ab7wjdHuGvtsW2qwmGiUtucovAduEqZVGEDhJBmD3U9SNAbA113UFFCxufF47FPJ6BZJMDhjxty6EWLAXjVctPK",
  "key36": "4oKMf1XR5ZMTGUcB8NpFSxz12RXQ64GPXsT31LFjWGFd1aAx4QQXZQBtXeDxvDKTejJ59y8dsnN5SW1zyqmy77zo",
  "key37": "2PrDSb2AruPsMHPjveVNoiHsVrxAWsv9pW8HmD7MnSDzqcHyMe8U1PVoD5jxkbUNGmbzMphtgjR4EJSag5oFBkY9",
  "key38": "23c4DfYbdspD3QQBpbtzBYiZuhhy4qb6DHo8uDRpWgJpW3wde6cJF1cSb6t8BRtVHdoaz4SFjYd4CgHBuWJAhDZx",
  "key39": "3B3Xo42FYJyiSHFm9f6Qv37yv1PBM95mDfhjeSmPf3Y81cT7eK3xkUExdYjaBt8KHQWrheiUyD5Bbk3snhZxUq7j",
  "key40": "2vUaaVFK4bnfrcvMVE5SpBMy7D4rRaSEQK7UDz3htdLY9P8R4FCKcVALveLMVJVBErqG4wLhwfruR4qE2ZmFkmmB"
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
