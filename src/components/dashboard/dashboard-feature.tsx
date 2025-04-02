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
    "3jHftWzvW7dSTWwYMUCrhxgLPtkvVqdUkQgWXpNX8brGRsVMdKGYP5jHd4F6Q1JvgCD6uegfhWLx32DEigGi6aAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dEqpKJwe7Etwp2mK1PNPEBEhnTueVZgVRZvfYXr5tmpNj6k7WDUxwqo9rEDNhABtCxKwNMYCxDUhiagYBi44YB",
  "key1": "22enpcNYE3hcaWtJ1SQ8FMu8yuDNxscrc7iYXEqK3Vyzm2A1TgbHLxmHWiHcvRPMvePMMmLPysTFVG5EZN3HbzJB",
  "key2": "4BphfDkrQdd8j4QeHm9o487fKVXqvqKLpP8eKCTXHQfCEssXsxbJb5XwvibSLDpXKDFyMb9yUki5A6tmGKGc4d6F",
  "key3": "3hHF38Uxk2PZ74j1BJYekLQGauNuv46uAvmsRK9t3ZsjwrLcMhFM6bPvay5q8eMpq21W7Xog6qxMud8JyNx9avoE",
  "key4": "4hzs3Rv5WL9Z9FxKUKcHFJax1rGYfFX2qw7LNJnzdbspniDXkyQvzT6nnVsK5GaXpyKE6uVsdGSU8PPffoZdqnLw",
  "key5": "PqVs5MCsEi94Jf8bkXQ1uf5s3pTt9WsiRbhFKEAYoM46MzQuhJSpS7FMNmgLuXoPQdekTnidwHxUeWhhvj6UdRN",
  "key6": "4jhKGYWibrDjrA3uDcYKBTd7215nLBjDinshCZWuayKoFoZyV3JBrTkBPfGNdYt3Eydfvmm5o34XZkTa52JkJnny",
  "key7": "FggymiUFX7HpyUcfKJZHUuHT2Rv5Ph2TwDAgQgwULtyfxRavc4wRvTgoR77Rr3cpNuRVK6XRkY9kZLZcoiv8pbQ",
  "key8": "54nu1pd5SUazudY2zVn8QdjnrJkP5YwkyZxHbt38WbaEyuyrQs6THz72hEV9daPmWTRsqYu9CUnwv8kJoMxVCDJg",
  "key9": "3BfKc2rx8NMK2Cgh8Nc2cjT2vH6RknruoxURdcs2GwxgHenuVdTvtimBS8TtGno9yJvtNrDj2xLW8Z4tzbXMEvKu",
  "key10": "4wUg26WPhfhssqfp8iZ675GFprDSzpAXQPL3yUmjCQQBVq9kCg1yAdWLkTUyVFKXzVTbyvAM4SnJznZc9JeTuQXs",
  "key11": "41b1HfiVUqSjpGJ5Z1Rsu4CpVQDd3AMawXZtQ5mV48mnGFYhaAQEAGKmiowadBkWdqECWURNDvvcwLvD61fySZ3W",
  "key12": "2gK9HQTNYuG3eHsjGseu69QDRv13TdQKEBqvHe4eyd9RjjX6mGggNS5rcLkfWrJppE9bZaqPS2CZTr4fUsCbbazh",
  "key13": "TL7M8kRQX7yn1iXWANptXEiZaD8JLohuX251ZG1yJ6zJp7Am2ADsoVUz68LAKvs3QnjtcUMWpgLtxjYqSop2xfW",
  "key14": "4LVK8E2iVjuVeGyPgsYLUmaxX2q3upfw5TwP6wB79CGH2mWAcrcCcqVKjfGMscW6KhDuuGk3SkjnnSUXTgBQeZun",
  "key15": "3MboPAAznGCy5N2hshF2uUq8bh36eddLWnH6jKeZxRjev7Dx2UicEViTPrWLnQf25RNb44zyQHMex2GLMdSzLzGy",
  "key16": "4NqXqDAKshb4WVXKNgwbxhe6KRS3ryFu8YcRMUAvubXm1heDpz5f1JAi6S7y1fwmdtnC7HNZ2GoeGzc6XKaNpJuK",
  "key17": "3Wr9P5mrwX4NEZWhJCsfh37bwzXRFNVhZZBink4wPi7AuhX3PBmtDa7xeNdH7cN2G8N1zMtNa3PfEBLLSziqwJNR",
  "key18": "4YCBm3DfcERRMKtv8jJCcsxBKS8fawfaEZRy2upfWziFML1Q6GYJZi68WENcs3xTVEcdKWDYVyqo2JgRsz1TXsnS",
  "key19": "4hnhfuk8cmwNmEw6ozJvXjHahqanZWgrtq4HdX2ts6Nqy86mNiJT2R7aRixaRfXispTg6mXph7bXQH7EzTs3tNxo",
  "key20": "3kDTiDLGCN3F395SbZ7jJVbuxtSy6YySnnFF7c1H4igx46C4duw5ENADqtJDWdatBNVbs5RemyEQiT9z5WwtGzy8",
  "key21": "2c6daSUnSQznyLT1iiJ7RVwAdFYD7to241hP3Kvdo2HXXUTk6RuAoYRBiHCph2gpjz8wHkBYZnWiky5TEKV9apBc",
  "key22": "TVK8ERuUQvVH7xwBTumy6LD8w5kkxoau4LUVzQQJXJf52oJ7TQVVo4K8BjJ6wL6KTVJrhjsQowzNP3SxwPV2UiF",
  "key23": "2zNYm7kGyVGMAB5qVVbuH2p8rNhFre25qdnWhLW5BpkNbxB1ZC33j5323ofnpZ13m93XQwYR2Af3qFzcmkaSuUYk",
  "key24": "2vYfj1Ca9pahxsQ7am6YuBbZxDE2BBosRQ6jftSPx6SVXoYapYvEqFYiswbVW8jwgKEGWQ1kxqNw8DbmbNEFf3qC",
  "key25": "37NP7PLXixd3tvHsBMnSjkDR9fKV4CbhiP7KazJMBbpD8JWhfSJujJid14YjZTMqMeqBw1Yto13R93tmUzGPTj1G",
  "key26": "5VEzHcuAt9FgY1sbac8ih1hibEsXgpEGj6SoK53QLkRefERKPRMKYY4PsL6ti6EszXjNe3gV14NJeCjXLcXN1Gtn",
  "key27": "2RMLmhszK3uysLjukWk9rBvEZ1oFu1eg4NwQ254BC8szovYSQaPN33cx24h55K1XMMNqfZh8MGQ28boLNAdjMmZn",
  "key28": "CiD4EL9mxK2SD6U1VDtpHUdGHjjBm1RtMeresVNjaNLXEp1fub3GyyEcGMKWP4s6evnzV4uuswLGEwXYbSb6iFz",
  "key29": "7tCxxYtAeWYE12fkiiFGq3HTo4vFUUiqi8ksibZHCJC3oA1CFaEuPXLHYGtJrkA7rZq1eqXGtjpfgVPmhqNpLKy",
  "key30": "4wCwpQKryM9Rg78zpACWDD7XaKYoPv1P7vP6MsiZJTo4b2j7hBf8KDRM8aLJV9d56Z36MZ2khpdtTPJTyVsswYpy",
  "key31": "23rcgTitqsQ3E5kvoBtcerNJH5D4FeXLYFguvajbDsbeuk4NczJwcJn749xxkev1EQLHcipG8eMC3cZ4c8hntpyN",
  "key32": "4LTuAnxS6tq4xMTZDU8aAzxT4e8uy7cAjAwgqNfSa9cdifRqTaScRPg3HXftboDstpTkoLYCs1xgFz311EUqJus1",
  "key33": "LRzmzHVkH6nLThY7wRpqg28bmxynALYZH92qTGhwPj44i9iHcbWRFAYDuVYYDRZ1S6YDJ9dNMiEdKeGRJZWvwDG",
  "key34": "2G4q7sRGfV1XG5FhAa6bSNsBeqfoG4sCXCi6pYueWTVsHNFkV97ykkHUSzx1ZnFkKYBFwjR7v6QWKo6p2cx5Smky"
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
