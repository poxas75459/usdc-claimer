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
    "5kXAy2reZ9BFGKp2uED3wQiWCTuunhygsPAF79EezXa5qBBrnKqmQNXwTXzAXFxRDGDvhz1CoCiHyjWyTzeZ4ir2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67b6gLvJCwK58inAhYfXi52VGL1ANvHoMccpRd2ihTpEQ2PkavbHUe7wVR4Uf5kjXFrJHSfTL5g1cNUX7JMU1Wom",
  "key1": "4Eh91dGT5DqTuoVW7f4x23LNbmcBJPuMDCqRpJposJqNMRZ2mLASxkA2iduChbcP3C9HzbJDQVMF8MPwUHHQJ6ZP",
  "key2": "5AxaxNHLGRpPRuAJo6cSZTJWS5eNwLihPjRkRUQkidyeHSX4gQv68VKN4yu134zdtFDKsMVmTWZx2J5KLjGxnFoJ",
  "key3": "46GPGbEzRZbVCFXap42K2TUbAh3hSckV51CMdUV9Mtu29yiSdb75biHnqTeQQay8Y9kMcVhFwEKkeZ5asJ1SDfNM",
  "key4": "2gRCcHsj1UiyG9hJeXpSuPHMuL5uHpm85TP6ZgHaTfxV7SFExnE51mQCnACA2ycssTPL537jzsrEo9TXqwFeJiJ",
  "key5": "4WeqB6zik5yk1N8mqMNv8aeTXeXHzmgeCZhAfjaMZviu3sLywAysRgMygzJ8Ajtak97B8pxmUBQMtMhfYCd2Apfm",
  "key6": "4tpUZzGvomKS6vzfp54UjtUs7zmSEmwAqUhjon5cpLfsrjTGh6Xgzh2pxiLaXK3VJmJseqpjwr61irU9bDbSf8L6",
  "key7": "poTo9Ue8xF8kB1cxa4624VDWDB5ujVTRqCoNCxGDcRjAKnBP3VvBGNVarXfyabcqg5RgoiwLXnmncb9ErsVP7qM",
  "key8": "3aa7ccLtdKXHKGacSmBz6BpfLRGYEbgFMdyU2eKyBY9hBf1uSFX928S3uYunmKfwPU1PQuGS7XmE6hsie8ggXAYB",
  "key9": "35SZBgMy9CLdApUV7RSLum8VoQgJdJ9UF4ECKNEuvaog61WiD4UwLH5m3estyAifob9uceHFSJWdQ1rbefE9g1Vu",
  "key10": "3usZU3Pt65GEztjnkSo1jF8ZUsDfX6mpzyG21argYaVhCSGYscbfG5Sf2Su1B8dBBEXMQvPtVwivnJuQuQRpjK7a",
  "key11": "4NxRM7AcQ4VH2gdJUN8ig7q8Yhr5ZnKoSBpASBHdgCFT8YXRfthZtDXiu6EtXihfygvFxbMiDhqcefmTgBbfNrqK",
  "key12": "4Nvea2VaQABLp3P94W7E2twMof7mQa1Wegjhzo9zKqKLAa3sprA9qhaVSCRvRwcw2Aqj6Kd1An6A6Z4UtLmHzkGw",
  "key13": "4rGtLfWZrEctMXEzJAv3uEdxCkURMbothUt6rF8cPm52S3c7eFMRhviX5CquQkTQx63EWYJqmmMkZtMtUUy5xojS",
  "key14": "tEFymNUc5GVoiJB9nBSiWGFHVBJdSXDzcrxvnwW5k674EQC4mTK91wfkw4TRzr47tMbGE1f6uMwi4gfGi4wNsXP",
  "key15": "NWmDamMouE8ZoY33QqnLcT2f7p3T34oJjpXcmwh2gLXsKN45kXqK96dh6jGfe5bXwv5344fyHEZLctRSKgXY5Fy",
  "key16": "3AGHzrh4DBvgEgXKnvSnHW39A2Q8pDBCJFyVkNENsjWEBrADWbpc2Nq9LRRAcuRnHTe4qg83b2Z1QsnWeqNt1y44",
  "key17": "2TBdSmYb43i5HjPGWCRHfAE8ej8ZbQRfMmTT63DYjaBrGTTKCuxCJDacoGmXZarRJhL2Rmequ8wWrbxGVHY2F7c5",
  "key18": "3usap749BieLvpKbeC2LnTkDjxpDW5tkP9BX1fsvHa7Tahv1rrNgJkgrKp9YJdCTsGvyqgooUW2Ft2RKztDKudg4",
  "key19": "3UGU2wz1AcZED7L4USFftJ8yQ3juWuezZ9A5PArVrhaYo2tkczDN7MG2d6pHcK8ExJugXCMDdL1hkJim3EQApPi",
  "key20": "8AqUTVfve9zvE1uLnD1RsPRRP9e2R74acSbWcZVW133c4H8tyz8stZ3oLWk2QrYtobvEjD39iemT27zVF3DZraH",
  "key21": "4ScQHXeh7cRXxWZu51zV816qHUxscXMFK4sfYzs9uBKAnv3AxzwLEjWijwvntuvvMquwk7kJ3EpCbobCP7LySfMN",
  "key22": "4KDVgTVh9oTq95J9eC6oVYbEoxs68CHvPGcEpAiqHWKJS7yY23gko9BKZujVCwpwinjW98SWh5pQXQ1cqJgPTdFc",
  "key23": "2zz8yr1KFLkaE4QMRe7s81iFhoFUdrY7UvQ3LgoYYJCsurxYYNp3hDF43bg5UJqKgd6GqA6KrQpcTVqFMZXS2VJ9",
  "key24": "3uG4uvZLp1ajpjckxSb9DLqaiDnxNqqg4szFBWnwzDFBLmSpGYgzhnAPGd4GLFpVWwVKT4yMrbBhMMwexfnDiYM4",
  "key25": "2Jz3o2g1Z2WJRDCDBDuCA7k89jHCxf7STRAzzJKXt7yUTfcMhYfgz4LYM3iaw5GiQdmfRN2PVuhEHxngFhxtm1vx",
  "key26": "29phgGXrn9DPk6kE5tqj9LbnogAxGjjk2Mg9e1KgKo5DmdRKwCV6t3HLN6CmZCX25GtK5icgWM8JdVCRR9sGkygm",
  "key27": "2DgGivRVNy1etfUn1aoz844JmGk4MWzNHWJCyWAgHJ6XufAHmTVVSMb6rXN938P5Xfu65WsAWhaQwot3JEDUD8vh",
  "key28": "sJDMjZibenPPh1kfGR76JB5KtusXwJyrzXR3QKWfaztMWEhUykWptk9x4rE4RanU9KykLisdXRt7XwA4RgaBN88",
  "key29": "2jTeS6BQgmWDzjM2pu9p4zLokEfYgG2dACyRZj6zpn1iqTiPmJMQez9h2eGo5GzwEgatMLUkqjj2WFBXanxHk7cX",
  "key30": "5v2iHmreDAwRmrVq98YTxsbVx2zAVqYAEPnnoD6VVB2vmj3vfT3VgAo2fgB9gL7G1jYqCX3RZqKtUEa3CqHKAT4z",
  "key31": "61kYHbpEjey6GwyU8pHCSmN1GWJZGrYBq5hyvKuPNyWrJtDZ4mQ7PGJ6iYhLAsumni6ypzC4PZXGYMJQGbz8tZJQ",
  "key32": "35rDk5rxyhznRNVEF4wQVk6CkomCuUTAGcZvdXncHq5SS4Nh9wdy5nnXEQ7PJ8kKGbm6ayReduZmVcLnzmCazrjg",
  "key33": "2CjKqoRXqzzvtDRtUCqLWJBcubo7s2Hmxkj66FhUn4fc6t5uLXiVmupCiq7fwAzPGqqjq5QvhWLjtVrxWhsxL7Ah"
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
