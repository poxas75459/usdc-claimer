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
    "djUBnzFF27YAovXc7tNi9o6D9mD3KJH72qhTY23Hfz6m1ByMPuPZgDzX3QCqtoJid3JeXhbwZVCYTiny5NkkF1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FEYkvuuP655W7VmRxckWPkS72LMGPgmn2gxqgsDT4EbxuArbg1pueeZ2gWJHrY3yrT1K69d9Lc3hmzfcbUavnw3",
  "key1": "2hmiecRgyKbvt35eLKBnZXoDxDJHah9QHceDnCyBK9TjcXCYvh58Dwjmzrfbeh4eof88smGixry65b2Qc7Wbh3Jv",
  "key2": "3wBbXdYsP2EjspBfyXdwppHGW4a9mXBxF5CXqVSR1VXqwhRpTwQJaQcShH2B2Sd9PDbuXzhUBRcmuAGkuMo6ArQ8",
  "key3": "5NtCCDDg8dJF1gymuX6cWhLx8bDThmMnFV4WVJ6zMTevJ8pf3NZ6cb9tmRo9dfrWjH3XoXMexTxZhF9GhUicXcp7",
  "key4": "2jrvWQFEwJJV7qwcgQ4eofTV5uvfYeLDPmDGkQSniyaUHg88SjwUKFVAqchoLNB2AvzRqdAHz3ayq9PqxJ8eWmwW",
  "key5": "3dGQWq11zhiywPKyoCYsNKPaiiAw3KYkdEqURWwT5nim9KZWp4DCToG5XQy5UE9ahVkp6qhaQckySE6mMWnh76gU",
  "key6": "4NK3cJvy4jRepsQ6SuJnG6zGUjyMLDH5tcQ6ufG8LWfG4DBDcCV87dvt1biYukASB7JRMaCresP3MgG4D4rbLHJL",
  "key7": "49j3aM2jzshn65EyYPX4deNifFZQJr7QmpjLs2uZnYpLju3dbuFtohmG9WDFBDCZxftwKXH7za4A4qiyH2xqCSKA",
  "key8": "4TGRWyRFtnsd4BRCaaUJUotiGHxyu37r5JXFedsjEeTmGhmNye376qg6dBxER9aJ8mQieHRKjqanXgQBi4oH8eaM",
  "key9": "2RSbjkzyG7JvP3JkJDfdCLfYxPXexDKVweasyW7kBLoVeb6BWhJp2rZzMmy3fFqv7jkqkcXJudhCDSKVCUp2cv8D",
  "key10": "ZjY6BoHvPBZ8FugWAgPakpMoM3D9DcmwamkQWdDcvNhkuZd9iHgWkh6qnMmgnBJnAyhKLk8LBL9CCk283mRh23Y",
  "key11": "acmL77BS5hJShvkfXbdyW6VJbW59nzysLGButUHL451pvnweErVg3VyKZYjjePHnXi7YD4nYpP8fDsvEXCnf5TH",
  "key12": "42NcsfxCSeUqdpNypVuGJ3p4zrWNAwHeP9sdJN1dS8seAcHrAHneQrPoefavRdCU1J2fwrhPnCSbfhcwiJppmEDN",
  "key13": "4r4izpfcrAFR7ZnUkG7JgNviJTHyttxwVFwTkDVdn3p1HphcXxS5afPKfGni7M8Jcj1EviaSEAB36LyrJ6zPm69K",
  "key14": "3QWCx2XuWUaEKyWy8SZh7RNGDSGFu4HFAKj3veK6jsxzEbTXek7rsx7LwPAnRtAutVMRMW8Ku2NBrHqDvgUgrZXJ",
  "key15": "4yJp7DCxjSBDKms7Zy5bcVQXCWhSe5xz19djWNRmyZmtVFh5JXwUyx9bFYm2cVDorbUv4oNnNmVMa3fHG11iB6X3",
  "key16": "4DWWneT5PASs26LnUHsQGgpZQKJE2VqL8XjvFQykiTqKQUsXyVdaGezRGKUU3Yr8pCz4899EEZJN7zd49cbcTULW",
  "key17": "2SYMwHsxcaoK9HteBf6txfvDNTu7A9EXQ1h2DfUEg3cAeNSpC74rYJFQF19JzwZQcraGAMWV43tyMWd7im3crhCm",
  "key18": "5cPwsmnapErXwBFyCynRkhEJ8ahTRjGe7o6DbXudmTaF6Z7Bfu6VYSCXzeQaxRquiX7zDeXTzBmXdHVfkXL7C6m2",
  "key19": "Evuo1N9DdKR5uRhWksYwLbiPU74puCP4AeWPZnq9bM31iHQT7xy8gmUKofUzMtQhGH1WHaCDv9UNkM7DHU3qbMw",
  "key20": "3FJktbigX76HgZby4uPzcrz9FpPj2pBJCXXUH2MqiNq5pXRJDZaLsMn7WU8PboN5djwb79fN6RspaPCNGnUKmH4s",
  "key21": "ubcQ9LheM79DHqfhLZ43qugoAyUhujeEspDo5j3UWR5ZcMbqbXRKqA2K5u5VaNcAM6ZvmT8JPGY6JdyjviESNhT",
  "key22": "211QCcrNDQkYDx3uE9ukohfe4Fkw7GfHBM2Q5GvQE6DwVoCpRPptVMLcdDS9iczfrUub1dLELSDTKATy17iheZRH",
  "key23": "5piJuJHuGU3WaVDM54LLXshXMf4iH6EFitXHvoVBSvfkX5HiYqaQF8MT4qfepPa2SLXHtygydioYMiGr4cSXvru9",
  "key24": "matMDfDCG4Z6hqhuTTAshz6ehGoRfq9vnAdc54AyCQphDfY2fXEag97CDWJVeuFRBi9gRi84hz4MBcxiVcMUmyA",
  "key25": "4MHoZR67PNarmQkQR91LFn8rDPmrkp4YkAa6e2fDMRqeGiiukjGFTGV7sSH8w3FpoftYBugaxACkeCV28hzdLrGi",
  "key26": "Ric1NwA9KgVCStyPgFg6m21k7ztHHLux464qgqV4reoohd2gxay1o9JjA4X8LrsxAvCAoPxscJrMc3SJaAB49UZ",
  "key27": "27wBo6BauFiReA2WDeAKQwpUs2TQ4fvrCvu8DNpjBV27QfNKwhktV1j2yvztxzd7o9cdSTb9oP4Kug9t2sPJzXn6",
  "key28": "3F4yP6ztvSa2QeN7TsjQysabWNkqjsUaFPRg11emquwoUQFnQcBczmZ8Q6ATxwZ1NoNQ9keSmojJ59LA7odqdb95",
  "key29": "4cfR89CtZr66piTt9Dk7tqpFg8SJzu3FiFqQ6rgnmwkdyeDVPkD3mtNgooHduxmkb15J2uUkfMcwcZre6eH4KjrQ",
  "key30": "5oMPR3dUvyC53hvqkSE8ch93fUjQHX347kTr1zsqfJLYnkRw8TQ3HSw94ExMVdNp9ytuZkTGjw2ptonxXwVs95Vh",
  "key31": "32Vim1YyXifYobxJwghHsZB92WxZwjM2bi81pnH5fPPmP9kL2KWR52Dz4enK5upudenkHkcyZHvmmbmS4hY6eHYZ",
  "key32": "5JLtRQtWN2Sz4yew1mgWZL7GDXUh3kaCtCxssHTh1C7PmvvGRE4HCk1pAw92yUthPNiCoUZbeJpAvHZ4wtoKT1os"
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
