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
    "4tsmzyizZtAeV7FPfGA6zgUEJANhqUWsLFi2Mu48FQosj6JhvMjyLxhfPXULDutHDRwEw3aBGaU1bwBaYquceUXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592xNfagjSS6fBminHcSTufW9jyMnPqVKU5y2cFBdNaMczopUHWQtqkZG5tzNL84U2NihN1mKr67zpfVHTy6YLAo",
  "key1": "4h4k4ZKZZLcsPeN7diPvUdxwkLC7QabBJrDLF3kqhRmQ9vNUAvEyJErb1zfRymLgsticwhUK4SVaAXoX8398xeWz",
  "key2": "4S2rL5qLxsAJs9qwthzRtw8xx4UZk699C5GuReBXCf2eKcXtM3fDdcR5jfgNZ8UiHbU1L4XYXXP4i4d9iFfKJgQV",
  "key3": "5dMfnDCE5cNQXWXcsuL8ZB34fRxpQD3Cu9FbwpkSQ1ymwuQjD46z51GfqsS1M9zS6TCPjRUKQktuPVcYi8sARc7k",
  "key4": "DLGZPiPhgb7DHHE8spAoGtEPDnwJvrSM92FbUJz9Le1S2wfmB3Yz1iyDZ6o7R41VnHQ62gFmUxpTruY1yHAUFWe",
  "key5": "4skfyPv1UmpbNjT6TUs2dEmbT3hy3D9wGGUozrVtKQjk3hbDCis4KJ4iy4k5E3rpGGyfXYzroj2CUxULC4RB9n2A",
  "key6": "2nFbuqJZL9JDEduGJHnanzQbgAzjLXAXgm4jymYzfeL4YntrVja9UJAFB1Da4tULbNJf1Gc9yNVUKPp8DxDK7F3o",
  "key7": "38i83aToP2i9mpSmvjZC9Ks4pkPYDrwamtVJEFg4f8E9W56rZ6HDAs4VXDhDT6CpSiY48gN1USq2DzdSo7WzfutH",
  "key8": "5wZZPT5391TtUNHE95bt2e9uMS859t6E8eyxjEJjCKc5oEfAmSksFgnW4JKJjCxsu7YbmCrTAXjkGQvygmy3oEPi",
  "key9": "4qD6AV46ZDvE7wTyqz6gZAmf2sU1d7bS89q7Ft8MCqVRSiRVrHdsJjbj79LPWxY8mFxioMiFLTwqVKV9JrJyfvAK",
  "key10": "3V4cqtfg5CeyjjRmm4Rn2Menh61TsJ54TzN1wBxNomUP1joEk1xFCBhiFcjW4DscEcmSmBBYKKC2dRdWUj7CgwMk",
  "key11": "4U6XSMzsAdvkukfDqR3dkZz5Cw2A5VANvkNwmomsKTynEwpWheCFCoCq9sA8F7rnL4Tz1HjbDVSiu9tpfMB1Z38z",
  "key12": "2FLBrp6UJ3qUhbh5ULJW3PKcjgXy66A67J3uvA5VjRaMynh1QqDvhYAE1bw4T7aGZhA2BU1Q2BZDFMZ6yDNr5tTg",
  "key13": "ouQzBZtJPwkaUTPd3tHbuZdE2So159vWMGB8hsN1No88n1mHJnS22pa3VUQvdxCT9rLHPm69vupndSanGcK9Uma",
  "key14": "3rx6A5jZdbgWQGDyVat3MWvHXSNq3XR4dnyHKznAcU865FMPUvNFiSmwv2DJPjknqaaUVvmNQhE3fGM9zS4zxSzX",
  "key15": "JWZsYkojzZaT5B1jbKPteP61wzSeSY3pBCqCxuijbByasGsqXbuZDh7R9SUcvFakgCww1XCD3ukzBGMazze7K4i",
  "key16": "48QmnfeDFoMXKGGkxq73V6oy5Vrj8b6Bhj5z8EDRjDhRDmGkjmZSE5KTmEj4P6UzdsSATqrNhEc412bGRB7aEPTv",
  "key17": "2dxcdeEx7sMknA269bx1aG1DdjJjsD21gb7CTncJYLbZXTjwCF1iB1StipsZJbyAKvAXNYdmmxo3a3Ne4duvkw4q",
  "key18": "3idjhG78nKCTHquKv9MpD9S7igMrFWg17rYxoPqyue5MuVBzFsy7hLDGYbgapi3Ksxx2gXMsBxRCvznhaP7ReDsd",
  "key19": "3RbKxfFaLihMckPxUftA2ybEUcnHcVMy5YVNdikGyQ7TVG6z47FjUwwhYSqzcZu68nSdBwEhe22RbUxJyEjBCjdi",
  "key20": "3AqeRbFzpDfz86mqUhHyPEndzLZFP7fKecG9614yMYsajtLKToZFtgUF2MRwRdMA5RVmDpG7dKyegHhV7P3qojFS",
  "key21": "43chJWYC8W3FHjQCBMduTqSLRQAXtLcAqfipuut6vdWZmkiXcWhG9zHMze2fgUuufgS6FPwesJAkEgR36pD1nuX2",
  "key22": "4BHMmjNxJPjc6ws7mJP5SH4bdS2cbuQN7Kcpt7hqbogZ1bQSAvdTtDvzVLy9KHxxu9ZZrhrfThJxR593xuTzSVpF",
  "key23": "4CXGHPSqExviW6gUkyzbHW3rRehGsJhdu9maTHp1Zu7g6Poq7BU9dQcbvWaW948ina4kE8Gk4ejF1cVfbSMf1vrb",
  "key24": "63XFaMpD1UPMn6k9NN7KEsfnzrptnUW1S2gE9UdhJgoTHkym4ocPQbaHL7pYFqcMPf1nrpvnvoMbTdYd7H78rjtY",
  "key25": "3h24KNHbr4B4286Sexn3RXsBHp17m2vipejHWZnSBu91dUfA6XaLWwoYCSSeSPFpKBXqCkW9iKj33665crez2Egj",
  "key26": "2PeswTqiER8KjAY4whwzyAiGXT9c3vra74bXQaRAX6A4QeRhrtjjv1CQFVS6F45CSH25zti9fd46VwhYFPHdvKJf",
  "key27": "3JhH2WqYGuFh69iKgGcNsjfyjP7tew9muGGjkWU9pg6jqcdrkBn7PeU6JPNk4EkcDs91bRDrRcx5oibhAMeZZUdQ",
  "key28": "2XAoQJTmBUpYRQLYZAcy1u19YvX2wYKdSwBWSBt3gUuq683A3r8n8SmsmByK6b92p8qF4JvwL7xYBMrAhKYzkHUk",
  "key29": "4UqQXf3sgxDuMbf2RbJTqAqVa4m3HtWN1wky5ssgKweX6sbiFQZuJQ4cpn4J3DhKEPxJsRCJ9JLFeY4XESzPs2aH",
  "key30": "oLAifHSHpfJSENhWLVDdCW684qriC6rrkKSenhyVW6JtsZ5ihNpNe8MHvveSQorkpdun3Fe3YNB9XrZRgd6txax",
  "key31": "2yooXcErXDgcCU71Px8benCnzdW3q4XGwv27b3rQR1ZEHDNnWi1rSsqgbNKCJK49YodkMbvjDrq471r5tXr4N4et",
  "key32": "5Xp3HWqeENfeeTQZaRx6tkJwbTbnK3hwT6bCwqH924zzvCGDhyh7GNYetyoKC8bkVds1WuCRNsbCdY3RZgrUvrNo",
  "key33": "5mgdzmo2y5rjPV9KoecJQFLtzBCtsM9Fc4idZeprdfW83YNSvxZDfrRU4fm9Gir47GJMpb9bTXEwSKn5rN7Zcjzd",
  "key34": "2mGWvQ69xHudQiofdVqrPFkzQqqpGvtfvq3d5tRJDHUyrEmHZKSiQK6AQEAa3gb5J19adwRs5kH9uTApfkntFEYN",
  "key35": "3CjKAWmvxxkgGiFgXmZy5ShBVfx1mvZSe6b1sMShSaYGWTSpgdysgXtAB4MF4t5T9hocNLofcS3w1brUoRuarrTU",
  "key36": "GHS5mqfURBVFd2UTmocsrstaJpUbuRMZa9UJxwTckS6mvH87L8TdnFHY1YM5ryzDPptpn6diuLcG3YhjZit1UCA",
  "key37": "PE5Rodw6gze46qdH3GepbajWCgehEbD1vhAKvkoLxNrkopBBMhgBMVznLjGUX9t6qYwAtiyytBDa3K4pbktYcVb",
  "key38": "2tkRTDuA7mBu3ivxk44UPjjCRst9UfnH2DpRn8FiqpiBVQrWQjoSx25N8cC4wf8ANGr498CmRDdKeDarVe9xTV1k",
  "key39": "5Nr2L2mbPUBdXuoMJekhYehy6DzJe9LYMLvMoDJVLEpukbipaB3Wb3eRaAeZJukfUE6GbcimUDRGeq7w5DDoxYND",
  "key40": "4sFfBYXUsx7E8tWJebm95M1qYUFkMwBDCcsvywKxuxAHAhNsRg3rQAqgs8vwTWeGkBmec3eJfZRb5Mpusdqx62SR",
  "key41": "3AafTVtLupEYGNkKyZ228qJLT7VB61LdoxrMYUdxK8r45xn7KZN3JUXnapnEPahJEkFw969H7tB8PqzigSuJJxVv",
  "key42": "5VM3C8iDpWnPvdsmrPSfzqzHpGfmCrJ3AFkJ5b6x8AdCV512ESxfr7Cy5KNFKyn99gRALZJXc6gUxypUh1tv8ADL"
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
