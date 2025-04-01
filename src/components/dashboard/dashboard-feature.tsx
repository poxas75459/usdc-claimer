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
    "5oPYSLUTPSDbN4SUCg6DezLjHiSa1n69c8FxNxC3KyFuEv7CTyZcT1vCi1t1K9RdA9aKJ8bupDC4E3qeZ1PTJDpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHgz2eaJgNzM82FAByv1ZwAcyR8QgCbH582FEbNBBemvEUmP1evXBGHucBqkSgJKwKN5zuT7jX7U7PAV7tcdDRR",
  "key1": "578ipGkHju6JC51hVgR8SUBX26YFZbm4Um7Hxysrcefbbt5zhvELTWYdcx2LaMbLKx39YpkoBEd7D29La7Ka3psy",
  "key2": "3MXzDQVamsANr5Swzua9rFa925L8vC3DVgtYG3xAMANkHCf6QQsgsZDVxNDpZmzcErs4KYQ3fQwTRG4Lp3wBfWir",
  "key3": "455cGeUEa7JDkChfnByh5AtdpWpYEikQpZqQynupjiNgL7KoxDJcocgdVFgNX1czZp3iE3gJUe4gT74kQosxCHWo",
  "key4": "uRwFRXSbTZDNMzQfqma5iDnVyq7SuF3y6kmmfxojPb2VvoEDUjm8CT3dAjEjRSwm5a9EQavgnHLEX2dz4QSdfMG",
  "key5": "qzXsV3cw4UrVV294PBUw1BHvf6UEpUUKUFS5t8jpzRwYGnsKmvWks72WwsKBtjcp8VHr761r4M5xfeQr6neLwhj",
  "key6": "Sb7PhW6F39qj5bcDyfKLYTVombh44KwNox8sJQGE9RMttNmwgHjbuosRmVkXFQteZDGCWiEdCcpQ53ox9q3HDPh",
  "key7": "3m2YGWQUNcH1aZoDTx3wLsQqbHXu78v26pLcWu3HdpBzicqGp33cnMyEp49LKfqNLDLa5fUbiH8xYBDEpz5415q1",
  "key8": "4TiP9aLi7HSJ22B1rXYSdkKChuAeZDc5E9EUu9PdJbfoAYDw6aoK6BeKruJmfz38AHrZV3giLm5Gho7LPnw5nwJw",
  "key9": "37RFjmrXeAosbbLKJ3X8RMZyYMzzFjmDKETWLZDMKrLw5q9mnRtCrGDZWCVGjb2bTaYRR4uUtcAYNQyLmC9zuJxU",
  "key10": "53Zd2HdM3y611rn6FN7gmiCuLnSiiCh4RULSSohURcdZMZGjLPPNX113gwxi1q8W71C1jH3LSm2Ap7bP4Kt24emW",
  "key11": "3wB2NwbpRtKUSr7VeEkVUpDXuAG32gj9BvcUoskxVxmjsdEBG8DXHiBgmEwp1LMCzQg3GKRd9BPwG9c93HzY14mJ",
  "key12": "46AEGYC5TZeWj49KtcXne2ZsBjczubqhy5SeDmfnFgB2XUE7eAy2jbU5tJTdgU8Vd9h6jjPMwp2dreAaFeWgKMAE",
  "key13": "3Fb8DS2GNAYtYJCwwJSTVmvpvrUaE34ijZJEkfmC2rTySvr1guWjqzzCaoWBE3f498VTKckCkKrJiWc7TBD8Vs5C",
  "key14": "vG5jf7MG86rV2y46XwLLzqGoU2623Ek3GTN9orUsC5aUDW39rMw5RFSwLap5NHJS9qfnEP8ceWCJvssuRVDQsEf",
  "key15": "3LWJhiyAnE9VujbRM3w7HUELVTM3FcXYq16frT5aqgJcVXDk874nTr7p8Bph9NdATgxoVTLw9s6ZauCUTh8Gk7nf",
  "key16": "44d6EFMFSVL14NaQSb75BsRNxSz4S575bYNoqA25PFcDhiZs2tG2DimgyKfoeih3Mp9pyNPczc5F3weALKNTqRGz",
  "key17": "4Dzsjur62swk6gdP7dpn1rTNfoy4UXzHxf9DRiJ9AETAppSH7f1Wx9aZUoB7FDDPh3EiHJTzDVZHTKV2McKWbyme",
  "key18": "PT7jrqs6SqidzL1kiTJkqfY4JBudjHSxQYmirAXpRpbMNPncfMXs8Jvqqbx19gNzxWJPiSk2wrWU9yP1Q65EHpD",
  "key19": "mnBdviVqUBCeeuvoV6qqo1eExwMVVjRuQzVP5Evgr47PRUKhfjdSAz5jHqZ7EfojbkHMbCPwfTzfgx7JtRNzmuv",
  "key20": "4cC6DNbp9UmU61mgrYmPw3z5S4yqiQTKBsd6NCiygQPKzuDMNZ6mR5cU23uc7rETuqhSVYyQh8FSicYDUPCwyZND",
  "key21": "3N2njqx87hs2uEu14TcosTLWvykSR4Cn9A8p2HxVVj4dQS571yqQGVkE2iFQFPmTrFNYC5pXgERzFCXejRSbmZ4X",
  "key22": "35jPMujToYehnowsAYfwfgsaxqhzpzXMC96C94gAwcSubk9xTW3dYmvgn5JkyiiW59mQsU6nHSU5kMi3FcaxMYBP",
  "key23": "65Cku3YqxHXKDaqorietEJpw1SCj78aVbM81mWLjWufycoJMmcUenZZpdVfVMALbWRRo4mWeA3TjFu7NwNhTtGMX",
  "key24": "57nQqXZ5zTEdDAeSAS6BUdePUEmCmsUYc7JRqDQzWR9KAtpd1gF67FdJsTBpJK2g4jupQqdKoV5Mf8Bwvd5LCFB9",
  "key25": "4HgjzgQGVvGNP7Urh8hkViRnGuf8T58GzeV1NwBCWCysjyu3KWW9srM52gHDmjm4BFqece2pLL5uiCvzMHEAVnHk",
  "key26": "24LDEjyyTfMFkmGtRWL9kPfHjvLLC6L3DZqQsXmzzSXr9CENzS23ew2em69DsdZX5HzARLyoafzg37wUnxEmj4Y3",
  "key27": "2ZtyThW5wG37DWhGRXgCWawWTESLb5nh3AFKGodcNVPpB35zR9bvL8aLA6jXyLxdNVBhqCqaSKttsBdfn2Jf9GNd",
  "key28": "4LDXGsNuBcoNCRH4X1DG7yJUU22FVhSERWXNFnnS4phnX4QWMMfJU11huceYQQBpku21bJavQUdWDHqAbYYT6P6A"
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
