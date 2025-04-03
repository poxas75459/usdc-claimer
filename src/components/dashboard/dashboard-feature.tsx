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
    "3zz3cV95LP4eWCGu9vFqYi1QL4wKXh7rWXP7KYoCQyMKcPJegMbxQUy5KSb7mhR8cWYMmthPJLhimNUbJUvJKCin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pz498eYqVAZ4hQTB2ZhdnpmgiepYz518oN465orCjt5YEpQRrpZYkDVo1THqfr3cEMZdf7WAyiw8BJVUhaZR73j",
  "key1": "2xcXNTJYMCN6AKYRec7om6XviLKCge1piTwCprM1UftC3FiWWpLdPd1cjNZmtH74XNxwUXZygU69FX8i1E6rQV8f",
  "key2": "23Ah1Ak1NGFyKmAWCRC2Gfdahxwhh92jgqaMWWkG6qqQfEKt5URkUd7X7QfCkrzKSRDu2RAViCN1EgmVr16VSP2Z",
  "key3": "3PU7S17tBzoDAvVV17cgqiHVzHfphKqvkxC8iGGnzTgWpQos7TbDdtfGwKWzyWG2eFgWmwbGa2wXSwzPnwADasmD",
  "key4": "5TdgL3ncVsxmxGQCQnLNdtz1nJgk7rzvih4tbTBGPiBB16eXFfEYSS4y1T1gN5vgjegZCm3oo1GXraNn59xHH3bw",
  "key5": "4pTuX1CeAmrXK9x35KZceVndPKHf9it4UrBeCr33bxjpZdBf4GimuxEzRbz3R2LvpFbLTFJ8mks9rKUXHu1dLAuW",
  "key6": "DvkBCr5u9YrEAa5WPu2uMW6wVKKNKLk8iAkKUo3GpHAYbZzKMQFHdoigKjRUao4jJpJAwXh1vjugQYX9eN9Zkf5",
  "key7": "2c2ugoTg51Hm23BGNoHZEJdYDUvecgkNGaycexh3haSYw1bhMRXHdXB8p36GcdMnSzZrSCzAyuedxFZKhjdMyusm",
  "key8": "2UjTvQUBE5wrNLQSUzefXkyWpbrknPhrsQa8WLVYE2z1Rd1kF4Ks2cnJrKfS2fxZV9RLZ7LMARFjkjWW9KcciArq",
  "key9": "4ZPQG4mhgFbDeuG9CFK3BC2EziH4LLRJ3vPjyaLkWg8PLg6jJQ34fKcC41Boe7mZutrg3pfz1N5YCck9Rc7Z8c22",
  "key10": "5avVwopWBPHJEbvjAm72gkY6trbtmsHi6nG7eFWzn3YBZYaEgmxVX3RGqAvqngcWrzGPk11zYpFemhhJYCYzWuRR",
  "key11": "2e7GEJSeGEkaNbbiNsh18umHTwc58TmnC84vv9uhR6oTcNn2SN6w8YDQZE7zUNoacwdVvfFdc4fFfwXQG7ingLrn",
  "key12": "Y2MRNCA7csjmGGj29JQzUcdrcgDoZnvSHtZbXHNCwdraiwDLfrogJrjurksqwzEngDvbifpTUVWBXkF2gCPpLyd",
  "key13": "5ny9ME68GU7EQLPPgd7rTtJmSJHV4GyHiXtrxWsuYUcuRRUR2aEYceLzNAQd1rPiayS5JBCReBbnjx5mx6bpmZPv",
  "key14": "3XYrWcvHz4FYSnjDBuBnV5MU75n4LoFjJ9GqmL9ijEmYAELAZir4FoPnYYHx72P7sstPiXmEnv84CY45xdrNXcMW",
  "key15": "4JUHmZCBDpABeXAZXywBQhz4c2YWh7x5TypWRRSpYRuCjn8XJsQPvEHqDa7p5CcSit8vVSpskXCRkozPNbazdFDa",
  "key16": "42wL4wBe7jXvPnoKC7GDGVcYd5zUfPoWajtQWDadCRcefPiK2Asxo5bcnJYpNdQy8xbkX8qpv3xN4wJ8YZ9CEGDH",
  "key17": "48dhZthQC3M2bWy6nnwpvJ6b8wjiLA91caZLdboVDc39mEZw5dYZCnX2f7M9fa2pfFNpGbyEsTpP79js8kWKdk7V",
  "key18": "37y94EPVWpcWoTvmZrcvFe7bgySZ6Cg5WrqaRswr398hYTT6y5uiDXw1xGi391bM7Sqv6hhC3UfTA4i4vRzDMHqz",
  "key19": "5WJRP1iD3eAC3eRjnd29raV5qxHE2zixgGgKcsDt5anutArFA1qWTMb7amFJAftMWjip89tLdTD1gdtrW2Fejyq7",
  "key20": "4Vg4dN2kpVzD1vJpRuUoomoEhtnHmNDivpVoJjtLd9FEkGJov6UcqFXoPDV6mr6ztDiysugJvDLGoYW51gP5Fc7J",
  "key21": "5W8rC5Ld1QVq6m6Ub5AT2oAyE3GtpbJC6rWMiQ1AmD4XLdCR4zMot9DNhm4Ys9EPBCiDPSiTwkm4Qfvrr7arUjMF",
  "key22": "3zFQ9eszk3Li2PFEnc6yenx6oKeF6Z4GT2dAWSXJwPQHcHipLbmGku7qZm8TfB3q65ZnnZfSUDEqfuruejHy7FcB",
  "key23": "2z5c54JdiXSKq1Ai4cpmQ1sPEwiSNm6oUP12u4sv3ZMd21omTNWZWAVRq8JBckV55Dnid8cE5GMBxwJPeqvyRdCo",
  "key24": "2u3TDZ2hcFcex5AteLnJJHj6fqtf8S5CnXdDPsNFv8Czhdfqbsjxnra2sTfFhLEpGCRwYzs2K3cuHx3tt91SzSak",
  "key25": "36tXAqg5rJrG34yYLW64xfpMieAGUbfR7w8h1eqkVtHZR7x9hqA8c2g8iRwFtxZKY6GodtyzHE2g1WWwMgN7LJrD",
  "key26": "4Zyi5CHUsTJF4ai6ccdDmzre9c1VHcXK19KD1tfZTqueUz7GAeaNeT31TnPhJzUcfbY396t4E7WiSqYpSXHoPriu"
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
