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
    "5b4j8jkqWd2frR2CNm6ouGM4FJW9mJVfNmQwavnr3h1tCjmqS7H4SN5gfjuwzbbLiZB2uM19cZXVXJKPQ66CMkPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJbbvbNnLM28qLT6AKfoRT1dmSZ4ZTi4jLNYY3u4XMWYpkUrDYPK5iBkZ6w8FtPoVv9umphARnJyd8MK6mJ167p",
  "key1": "RSpg1Tg216DFobwM3VnpCUUQjPhEsJrpAVVUNGULngnxJJoeNE1xKxGM2VC84oCyRuJCo3JaDhA6J7RfY2Z2VnZ",
  "key2": "3UMNLP97boZW8BBTuhT1PeVRjajGSCgGi7o64tG72cYDDaDkMLAasz5wCetEnz7HSLS4iar6AQW661wfMQWy8CaX",
  "key3": "2R1UsLjK8zhHmfBiNSGbGVviWkCKDPNPmzFCooJTjTnZMpDKXY6Xnh3QCyeE4ox7MKPXg9firxh78s11iHTx4PEv",
  "key4": "2kgZZ6gfG4UgKqgMK128QgkpKwYiYhT28KmxYxUYP7PwGALzZbx8Aof1DeMPdDGWvmgMTsVdSnJLh3HGh2yZRjmg",
  "key5": "41qi8kpAquvWvRARmvSp8A9zfToKk88oLg6eTL2QAxH81Npo4PcTUa6hxccFj62ActvmiKVSYcPk4ibQQi5PPTwM",
  "key6": "4njrwxKASVMdBysV6NqKcDDsX9geHg8owL4Q1BxJTU6ht8j3qcRk7eUnXYS4uCMurN2TGAXuPPsFLWRCCoMi37oq",
  "key7": "5YdjrRdvu7Ju4U19kAM5eLiZBxjYFmCT47sZQBkpCH7ZMyAbsYNimQkQxUixB4ABkknPoTLcbiJhbqMWtpyu1Jh1",
  "key8": "5fSY6VbE5tpJa3tRXuKfHJRBY4QV7siRivZegGtvLSrWPzyypWB8TfNwfVYjbWeQGTiSFsgPHmhAm6TRTUg1aUnh",
  "key9": "2E34nNqU2KnaVCBeBt2ikVWHYmtw91fCwQNoBEQ11kshnePW6RzWs2iNBZtqdgGk2pDWheMJqH3wJqLoyxyTDDxJ",
  "key10": "4nQ8ME2Cc6M8YPHEv43M7Cnn6bpgM3xkTUbm2UrH7rD745HFJBpVheMgdGYF8g8xnTXSujiCDA6HAGmHwXrh12Dt",
  "key11": "3v2vwVWop8MqKm8Kb2yj6exFKJAiq5CzQCLRAZV45kCKTd29SeCwWRJPmfrUk7o74vYrabCM4VCGxkoaFsneNdBe",
  "key12": "4NxwRpzUi728Ts386FYr8F1rQAKqcfbCjcCkD3cuVjsTXgUwJmgRFxbtpYNMKVYGQkJwarWuwjjnBgXtaLddA5BZ",
  "key13": "2hpMu7Hx6rty3KZSp5RS8mfRLFjYSCkQKxdRgpj1iXh8YPM8LQHAP735VmoEX2FYrHfpVLSAxpme5gmBcrjMzDt9",
  "key14": "49mdcREXUEPSPc2muMaPXjjAnTzdP1WRnkGwmCoeXCmUFLEYbrMeZWw8Ck29W29mkovihtYqa5xpF5FuQhJJDgAG",
  "key15": "4Laqd2K8HVQTTYnMbEPmoLjuH9c9zSjnqNsoSy5VBWyKASdn8Edb7ptes3XzhnaGjMZy9ZyNXdKy6ZckfUJCYXd7",
  "key16": "5wnjghWP5dNzf5noN6FXb1iUQbbFECieKMToeg4UCEopAWJ12bYyzBKgyfnRVCtmqBmtCrCXnfP2XxQHSwjF3QUX",
  "key17": "53xznCkfionnfXS1ptYcVJ2qPLjcafuGVPJgzYPuEK1GpTumVPu9jqCuww7SyigHGbDF1XeUJMrjYyduesHng5TD",
  "key18": "2SdqCoQgjkTTzNqkEJ2AQexaBuKAcD3r27oDx6DnexdatSRCkNWzLSh7CDmWDo1EKfbQbmGjw7LqnuW7zQJAnw4x",
  "key19": "5ggA3N5xEpigBXw69W46sEusWiC8R9bPzGeduCCENDHsCufkDga4qnQP6m3kbPXGWWnW5xdXyRBc59iduYDQc63K",
  "key20": "2XGdjS2YHgPebSRwc5usJWgSVtBZ48hChHVdoTX9BbCFFkwJwyw71xX1Zj4kriPuRahqusUTNBwvZKPEhRk1Rkdh",
  "key21": "494gbLziq83A4YcfFXLDTf5LrysJibuyHjDXvioKShoEfwgPusbLuK3Dxo5NgTcafzsTvreEtqkaiKtMCX886anA",
  "key22": "2mKWUuFdKM7yF5S9vjjEhwRtNV1sQW5Azk1aV6pqfoaEa9Qe3vbAByckKBq1bdPaQJeyoP8PB1i81EPApzg94p4W",
  "key23": "3g5khy9F9sh6KBQEp9jJGnzZu8bvRaC1B3fkeAECQF9tue6Ky98VGiiyvrDLaaPviwW184Jf8Enkd5oRstNMaPQK",
  "key24": "2rbKwGcLpiKN26F6Fwx5dS55qJB4qx1aMePH7jd8NeDfX3Ui77CzJxZXvbyRgWLRXzjFRXoJh1A5npSkeAdQvxww",
  "key25": "xEts85xM6kqbkWK5NJ5s47cBXjCU1Fx5SNyAZPzkYX24ZBAQUNknCuC5xGc3bfr5zATKjtXMGabULJbyqDMSTY5",
  "key26": "2jrnTSRqJXvWvhU6x7616VSYwzQTAq8ZBdBbpAhczTFE2NrhxA4yc8bQenTgQymXhs1DL3wBy9Dw6tdg4RjwLbsZ",
  "key27": "5eJtd6TQJPvhMbg7hxsq9xFvXoaBsoVVnR4mw3Ag8obmHuvofGxKzoXZuwqsbtUmwXyEXxjJfCD6vdSbfQXin1Y",
  "key28": "ouSXxdrtFqqEYzVgvFwtKadVJiPYeuzELSLHaknvh8PAWqCRK9myYPLAMsFi1fzCzbWFhcWXbGQgXXjGFA9vrWb",
  "key29": "5kXnXkdy6bAwGwZtps37Z2oXtsq58nQXVzrUrdBwV5VqWK3TqJRdxwo2TSFm2aRwiNAeirALkJFnMwPTAixqEntJ",
  "key30": "25fc8yeaPQPPFgAtxfzEnHbKeoQhW3wYGE4ExbAEoV4GFkvuGDZBrrVjj2yEm2fcmNPPrCEigEh1YZkT2ixXgSaj"
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
