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
    "rdde7PTzUKoUpsYovEssC5xNbwhL9Vg1Z5iwAumRcz7ArYahQCAY7rZwdcRQjJFCY9ipHBLn4ybuQAszn3pLfML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6bxAt5ULRFtKaGDuwVicp6EPZozVUZjZcbvc7YgBDYJkLq1q65tzycWhgeWoBBQmLFE7M4JGyURVEJpkzCNJTd",
  "key1": "4EoR72bJt8ot4e7iyWGppmhobx9QRKj8WvgXLaP7u2UzFzB31NuMkH8L8SuVHeuQnTimm8jvqNHYNerjKV8yNzh",
  "key2": "2hm5Gp5Y6nc1xfdwowA2qBFpqHWAgU3qSLNTEzGjhC6QSN1UJf6ErqeicWNPgWLbmghRQ6psNTSRBCsNgTTzUzwr",
  "key3": "4VJDJCRXFiF7gAhqeckB5jP1QUb28gEkjdKjFvg95uVTGuaDRmxWzp1jLaPDreord9g614LiMTPhAD59KYBMocsA",
  "key4": "omrNeWmnqH5zA7ZLJN6agxjHP32YHTAC44QiAptPg6i1MSYtLBgVx5drrb5QsZsjvMV1rfP6MejaHggwh7DdiYW",
  "key5": "zLk1YjmqhyEKCzxhojoEemXCHSRJYKiVcf19ifGmMM4n4jzzLezPqjvDxYvHtm1FrPMbTpoLYowHWCkm7dmRzr7",
  "key6": "3osf2YUxqdPuNxmykgvTWGRcUP5SvLcErjR33uKRnaQdYDPTPXWQjCwAeYoNtEVjvHnT2FZUv6UERZV44R7Cm9AP",
  "key7": "5Up5zLbs9ApR7EufSC3G8GakK59GULMa3hKNrAY3Kg1oraxRLZAD1vhvhmQHnWJM3GxxKSJYR339ZUSnUcLcrpmE",
  "key8": "22TmAAc9hXc8k79gYorsB7anbmHREUj7cwa25unKeYyfzVtw1Gz2TF9uMmzUG9eLYsuEWEraLBEpmP5mVquEYtBd",
  "key9": "Et94JDTFyMLFJx96ZSXp29CjC6PWDUXKkbYXF6FFPQarEUgYGHfingt2ivodWNgrEj1NPTA5vxQ3uST6NtcoZJQ",
  "key10": "3DeYmjC4QMqVKXRaaBG9XhKaasjoNXGWx2qiQXDzV8VuFsvjuXRJYXCEyHVgLZim4naHnguKvLK2Xy8BCmG8qrZk",
  "key11": "5jCeGeWe8wkPNQQxafChvFfnP1FfY2tEhkcSvck4NBjZhytery1W5TbDN72hpYNtMLrFTo7GPJTM94DihSbvi2aJ",
  "key12": "28qqmN4NzC2ACdrfghxBZyED4iJ8AUCR5qEx3DGZZXuSUX3pMtzuuGvhLJxNea6nMjXYSbwcmxkzaSR3M5PpwjCK",
  "key13": "5xPoDuxgDc2AhBFyDx8CRs8hLaHhX2PczbVTZJb6FLCwz63vcaeKyMB1ywQQBkN6MHyT7sJyzsmcReABysM75q5L",
  "key14": "3sMw4jRtRTvjSM6LLBdAZbo5jtNrv7bcJ5ts1xstsbRU3vXv9aANWgq3Sg77RnrJmfyQpiUDeXUHF7XtGanPBR1A",
  "key15": "2SWPrgdFMtEWC9pAFp51EUpcZrQvTp66iJNG2CTUA5kAbz7JmotBL7Vx1RawhgFr4vL2CceH41U1md48woVWtmk1",
  "key16": "5tLvKGHcSyNGLSU1D5BDZvtc1tLRNf1pph94KGGPcMc5DwWx1rHtZxDS5vSbYM57hwWhkGg3qARTZr4tnhMVw7S",
  "key17": "2LdwfdfFyAzmJmjQfeR2oZMQPChGG8SA3YfMQiqQmHryoiHwZmS9pfN6tzqshznngzL2g9EijpBTqJdnVVW6wbdh",
  "key18": "5irWY2u16Z3AsdgF8DChA131sPXPkBuKnxeGiKZ7iDyw6Gpqe35mE7dZzx3kXF9VpbXJXUqSPB4c69PRYg9DTEMD",
  "key19": "58eYiMCAJ6FJoGwJ2NP5ZAaAPPULXQA9e3ZLKRiz4JsSQL7DKUpEVh7z49LB4sfJD5cCmVgN7nAbbtiNpY8FmuE7",
  "key20": "6QeQDU7ypFqifPar5BJcr9QjNgdtkLXwCsEiHsNyNeB1QRAwPWGrk4QJwBnJtG7LtkCqGRB7WwdnfCYkSTZNdPu",
  "key21": "4GTCNPa9anZFV9hD1MvCub7xf1Mx48tRD3jqPthjgTZPof6rqRPZGw9iYkhxdPxt22yYjjaLSG6vNuSpgsKYzdKL",
  "key22": "2kFf1GbKLAFmBRBrdHfXS7wjm6Kc19Gu49DN6RL1j97WWCGYcUZ6x1FXhJHe76c55Suj48U6y8Aq92SbAuAqZbaF",
  "key23": "4SS8xrfMixjjYgsaa5xxr3uNw2uq7owLG1et7xweNkQRts5ttPGPxdPoi2SA9e7WCSFVXfFLUFxXDQ5V4aBZUvEj",
  "key24": "3AtBEkkJ9NwC7d1e6vm126sSxX9AirDKF5CBEaoFC4RkoEc74eC24kt9LeAP1J6rb4N7hncuHNaWGm6pP8TJ36JF",
  "key25": "5hKUx7JDzGZMR3iEqhNvHjXziXFmV9UF45eT9QnsVa1vwbuyUhDxHpMZ44g6ocoC8szfP4DxLVUuHiJGwVzCet75",
  "key26": "5Q88wTZP1A7AyAU4f7kunecPfiNQpRedReB6Z7ar7EyVf7SYNDXTVZcgcGNmzXpdzajRqVLF5nNb778bJx1tJzoU",
  "key27": "3NeUi8sHCRgp8axhwQYXjA63nKRG8s6GFDgCCkMDfb8ZhpVPjpfySP8dxJVgtNBrYC5n3ed8EHQgkDUhjXkP7EUi",
  "key28": "51rkYbMvKxT728GePkLj3BFE8dqSzpGSnGdZHEKWr85vhRBhKyAcM7S16yM8KcdJCoSpcf19qYQwAiUbXb5LYz6K",
  "key29": "2Ns5JBgSMbDgsXGrUBEn8SxwN5xeNB9gjMEYAziKZoGZ7d9t4ho5rayAoRKWW9zJiazdaFkpVzwVVTkjQ77hrSjN",
  "key30": "5A4fqheaBFX83vG2qcDrDwieSVAqAonjcmMsyYNkne7JdgNoJvSHxtawVsgDHZWnMjtipPriakv7oi6QSonPAfeG",
  "key31": "47JiGnGSF3XAfQ5ZZHsymqJpNphsfK2iEn78QfHv8xYDNyjYs1NB1jM5LqTptNKyoUMhWuABVooTcHAPaCAPw4ti",
  "key32": "GrJVsBigjKu7d8HPqywnuPVThRZ9PTQsy6pSu9thuUMmbZktPtGs5Zs9VqJgzhBRbULFw8QqXx8Ef5fQZVF4Na8",
  "key33": "4ihRFWHXZP1euBzpjjULQG9dRTnQ4FqhdhTsU4SfpCWViequzfzksnq3Qdgx396bud9Vx97ntSpYxzyNuABUrsrT",
  "key34": "3bHsuurv6TGHaQVw8f3NhKkdrUZS9junqMkYGyHT8yDFwaC2MZQ327ZnTguKbHD7jaecFFcZSYoygTyDeiounozd",
  "key35": "2qMuZZ3rHme2x9bdbN5R7WAxHNamRYb9ZoRXsssL4egu3VpMrd5T26JPeTNopBM3FogJ87H9PLJnhnJy3ByPg3wC",
  "key36": "4ML4fXyx4SbeikKR1FbmdDPBj9vyFF5rDd3LefMQDHWfDXWCh4kQP2cLnDRbj14ZQbMaYgq7svs8xiWaSX36fsvS",
  "key37": "5vHDfFHfFHzs6HU64VYL74rs2VfBgPsF6EpTWiPW4TqULp1z8VRdiK2iN9FUdJVC58uDp2h7ZnqsXh7ZdwnbeACq",
  "key38": "3zbnMGVAKtoaRwSjiXgzxUoJYLR8T63psLPravo4tYnJEdsapUSzBdKYF4wbWqR68VspFAMmVQNJSJGpphjdyQWb",
  "key39": "4JQv5JJTwQkDHieMKJg12tSSFXvyTjpqXcs9NN8P4bWroZeDomiqt3AvSJcGbQxHEMz27GSpgFZPsyTtzpTo1ACV",
  "key40": "2AabXFwTEcSzBHyA5JFtYKTohnHzQgrkTi9Ue1WZMrBjWzunxQGN1jKQ8fWyh7gascNCQDhooyVuaTB9WqsBRXdP",
  "key41": "3eWAyNzic8YVBkvGg2aNRiehLzt4o3otyuURjxfuayYzuHPsskyH8n3pYYmrHSVoatdwH1PX5Z1ZjU3KYYr1zEHJ"
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
