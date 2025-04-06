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
    "5rzAx6CpyAqv8N15wJyr2oQZM2WTx6kfCsJwT4QfmdbSWpuo9hbKHuqduf4JuEUR6Lmf3YmDPWhRNn58okRdXhn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewo8Z96ebcCfgSBQn1eqEiEHne9qHTtKN7dR3Xpd81T2m4F5FV7pyiPs82fzZYgUjjPBG1fgr1HvwrjCWdRcUEG",
  "key1": "53ynt62Ecd293UcLf78WGWV2zZFwp1aiJbDhC1wERC6N5kG5CJ68WaLtsBovC58K8TRkv6UCchmhnuwnmGCeUkzc",
  "key2": "32YywL8Jyrzg4DwDcKQg477z2UygqS39j2SNPQ1C14cYRAfAB9dHKLFvWB7f52qRC3pKz11ssqPPvwyvzUnM9V8D",
  "key3": "DeEqzDjcnRy2td8LkjayydLBj5SeuLTmJrUPstY952wA2eRoxpiwJkv8MkDARkuebmy826hpVDHbmnoAm3EnDji",
  "key4": "2zocvdxD3fKXUPRQgDCLeCBLLZfofk6mFEhRsM4cVybxurLwavwh6d3ArH7P9SKzYTaEkBR5VG3wG9BSzWHjxNTp",
  "key5": "QLUcteTZeXhezXh7PHea5P3xCY9J5QoBsvs1VAzx9PJ2B5TmQXAgQMuRRdE8QxzEsEqsYa7sA9UA394Q7yUFxj1",
  "key6": "G112HGSHgTXyLiqtA9zwGz7BQTV4DVxvB3ahmBJH4HBZ2x9xQAF7wtVKBwrrcsVELpBKR6zGRmYGQbjWhGBiJQa",
  "key7": "2fBCXb2qXMWXkvCsnG8jH12DAhrRyZHg25A7rXfz5GurM28fsCpqcErQEvW4VoZqz9CAQngWHWaNARoMAnij5oMU",
  "key8": "6LieiCDz45V6HnigmHHjTQtoSoUAqCLL4CqNneQojoMzy2bFEySMfD5gubhyZ6WaWSDffxWC3GtJFnz2w8htbYp",
  "key9": "314Zw1YRfwPdBum8wRHtpFyG1dvRLgD7qZbRG1S8TkvzsWmVcbAFnHspcxQ72zRLZ8waiXjsPqFCRgxUfbx7uyy5",
  "key10": "4QiE66aEpaXJXPKV8ZRj3yn355EDLLxvbWdtXMRvLWQL5KfxdyJCfcmxRZRi6JiszhRHXy886vu5UcNuj7AmQVFm",
  "key11": "2sP9M5NFYdVuMfJEXPRSQrpww4hecuny9G1s6vV8cb1uAiu5wsJbmLEdEBwLptwgviqCUoHkeLa2m77qg3PiETbo",
  "key12": "23nScqp7sMA4bQesxcFwgbjkNVx3hwr2toK1NtyHsSfviRM5AjP41HcDYsEJiK4KsSGCE5qikGGTGPPALdauoj5E",
  "key13": "5rHmrcS9nG5kyKmThDEAggeJDCbYMH6ree1k71rPU9qVPHVDEvBaUT6dGqzrgNYzvzhksateF3KLZtCUREUDg6xR",
  "key14": "5KRd4LeDza14LdWZxnWhLzhyqSdo2HmnWU9VnfxnMak4wsV6yni1Wo7oT3Pe45UoqyfUZLJ1Q5EFeNtRdrPBYFZK",
  "key15": "36eyyt3TxFR8TcZoxvBYSiNi1M2iAbX6cpQnfyhwXDqECk4mmvxdxNLnG74ck9jyC2AsMarWeYDegfrwQGJpDJc2",
  "key16": "yquZBhNddDzzSF2eYDDUk4LETyJJGbTiM7EA1CDdhUSErSoGk5X3a3yF9SuSMCuxGmj6Z2G86c3dDj7G2WfMnaL",
  "key17": "2LDUwqNmZ36ZSorsi3Zby9RCSeB4kKZVZ1UEykGUyxF7crBs9vPs8p1y7M4XJsJDrKm49mEachLQfCgaQrHoVwFM",
  "key18": "3Cud1CwNcbEgzxMR4vwr6u4qSuPJ2huHocu2vFxyfJ8d5fbceD4KrHUc8yiBKxRdAH4ac6z9bNDhSLHdUizZg6ac",
  "key19": "QBr6CearrinACu6WgWTbbAvihNBLwkDJDm2oEXA53wf86L44hHQNJ6KPguLokbwkHFjCfScTQxm5mQMx3fSP1pF",
  "key20": "4gnSUfkQZssjUvg8tT7Bh5ViStZZJ5WnM1ErUgKmoWTLwufMPqcbarWXTEymnYeNEMLKyamu8kgenoranFawZMVT",
  "key21": "3oN2FcZ9GjaKVbFURaisLNMyxhbDX8SiShrAPCbSKSZDhrwrwV2gZ62P7X9yb47sbh3uXrT8Wsij5GE8AshpHd2f",
  "key22": "jwjkg5133vFRPBKwaVQ8HBEcamUdQXUQE2MFY1DAG7w57nQQ6GMKbgqHdqQdQu7BDFq1usirRPPNyw8Qqt3ZKSd",
  "key23": "2sye4mmUgNoqZDJ7cJwiagh2LeEUCWuRaYAWiSQAwFKebmVmsv5Enxn8pLzc6ZrNBeyEUzMCcq1t1xCv87ynzb94",
  "key24": "3sozU6RPY6a8uFKDXSTQbGhuQGiimLuHgkvz4vDQbZY1djVR9BkP1K7H35TDMdkQ3A844t4EjUGpBKn2TCxTbsPb",
  "key25": "4JWRiWJLBhtmEBQWPrzDZPvJYadqmANHZfnLCSjKkZF4vDyRzvv1CVomLcec4ojLvwCCDs4ENmVn6C25j4KzkS81",
  "key26": "5ZjakUgb2ZZtkrRkWw6mv8YsdaVHLsfHxYcd67EgMUu9rQ4m65HJp2DY6g8NXYZTk4BwZaRuBHfELmueuWvqGNYZ",
  "key27": "4CP5JGeSh2h5RxvGxWJJMgpBxxMKWNzw74C6Rm6Cz9APniHgiN3fgMmeFomwPW5ve1pV1pwDorxxHYo58hA4kmUX",
  "key28": "217k4pFybGxyWqvuuPf3dfGw7fnULw6PkKSXY8Qb5PhQC7xe6gpFhPWsN4KCwgFQA671yNF3i1aEkNDzsP1QRXe2",
  "key29": "t4a1ADbczyW4T8sn7K4PwqCzt5RxYbsuMdWRUavsHfYTeHXtvcEJhLdrrgZe3pdWMJ2qS1bFUJijrt26XnkvLsA",
  "key30": "d4gmxYF9jChX2PnUgV7aVidMm7TtXTP61JfQrumcHJnbshjZnUjg7dwU68WyTLW2D7ZTnaUEAZcgtLS2vonEnjE",
  "key31": "21SMcdJ9Z4qX6B1cRG8SXH4Rw5SxCMBeVyBvJCVRkzrT5GvWEwwU7Vgk8rTzu6xBAqTd3eHmYCptj4jfQEN3TdbK"
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
