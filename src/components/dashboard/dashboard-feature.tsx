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
    "1bpTHAeskdXnHTjghN6HuVuTFjzU9CUqEhxTzLipCdrLs7mMcoXppt62qyD1k2vkSXWXmsi52PzDTZAf17ddW5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjMvr5apLgS8dd4hEE3zbZm1aDhwom6BmAKAF3EcF2WqGtnvc4wtAazPwLY7Tj2d9hLovUNEwWmZbACrcMv716v",
  "key1": "4JSCRXzUDXTeVGRYJEtxH6o1bbTx6kaCcy6mfwvGvJDMLvBWdU6BsSHyk6iNFpY4N2WR6NtdXF8t47q3tE5p2i8B",
  "key2": "2qqfeU3RBdegokQZZjJzed78QNvshLRAFBvng9dE4ehWKVudUgUAMBDDmGiKv3hWvghWf17n2kyvQZ8VFUH69HVc",
  "key3": "5VA6ft1wbKPPhYqRq14Mfgt886DX6mmVmPq296HKbntMWkUfEwShrHhMRpetTQyKa78mAtKcayXQEj4mUqXkAHwV",
  "key4": "3v64vfvqD4m5TNPwxkPR9QvWePSMSX8WhFjP5xU1MVWb7esw4wZivhit2CxyApQb4DVJ5FyJyL78oFNRT3x6q1VN",
  "key5": "34pFBTF6srCgbKi43nRSZu1fntR4KTy5qJTZd2jy6xRxeBJwMcxq1ddrXhkqYCJFYPQwZhWha77YAvpe57FCAo11",
  "key6": "2KQnL9gNsRr9ySvAAKF4XUgqaJecabTNvDNdrDYexhWdLZr6MKoexLzcUvJnSHmwtRmjNsG4iEkKEVRS5yAwxCuB",
  "key7": "3pvu3GpgU1camAUgCNksiZCDYdMFbbFrJhv4gXEkT8PogApjFtNHAnfyK6mdmMKncmPFDt11Jc9CiSUsKw5KPcYM",
  "key8": "2Kf1RF5524aP3p4v7CSxwKnruRiMCEuw8xUwdKQhuDw8YqXHYANBo7sFpa4WTo1vh2aG6wENn9TvvgThpY8iTrFc",
  "key9": "2maLah7DPVvuUKsny49kytNUsiAzAGekddWjho2FtKaYc3zHKLoEQtdfqWcbdJHV6krMHK89mxuj8RjGtjrnH4Ek",
  "key10": "27k52gHVHvrWy5Zouog8JPfcuKVwPs22nkVpiy3QiD5uxSQiua3c85PUwymuaJ7UL9SfbMYDSTZFD1KuKokUjtcQ",
  "key11": "565HGd1U5XdgLCq4n2a5MpkoEuc8MCZbxTaSMand4j4FhsrNyfqAGosbj44A1R17bLrkPMwXYDum5GzJc1NKkB5s",
  "key12": "2QqiX5XpgGh4UNW3QtzyKHLg3U7pXx1EYJkL5NCHSqDHtqwppFVnv9aJj5fGz2DB26g78RA3axuZgvoRoyQBecET",
  "key13": "5XrN5LmsAaeWL5FZoJUP9BNrt4mBiUgmNvVVARRTmhYNhRKSL3wsAvrK32sSJTannjxq2o95258tb5w2ZmEV5sYJ",
  "key14": "5SPqK6S3gSPuRpQKC3i2CtbJrpirbViG56yjWcNbYVcuBbwVegWcmkwE6GQXRYiHP1BgopPLY79hBTK1Ubf1kcSq",
  "key15": "3NnEScPWt5awEwBZb9HrKae3uGLVtnVuAXz9pCkKTH4GX7eToxGYCXhnyBZzYyPs5dUd92bBa72zjo9b8xaXmGby",
  "key16": "4xuqDxTvt5N9LmMN4fV4fzTwytH6pVQXK7TqAUc7Mr1xCaHH2YtBSwje6NXaz1irb4WG9tYf4fahu3T1e3LUbp9y",
  "key17": "4xzfZsveskbrpJZsRSoYKhHY4ev9GeBDwN5GwtU7NDBp5tSAVtMXMm7yfDq7EVmpVUpnhXoDCtGkFhC5eNpPDGQD",
  "key18": "4AULeTXivdAkuqZxfJG9QUT98NwahUWoNbGJ6iX4SiVDTDLZWUgEqesNRCmdyezvsaB4Fj95VL5ySR6SSbSxmpvN",
  "key19": "57WhgafuWUbocM6et4kCivvtnoLhNhVcCr9iDP7iF21x8gHx7TXPTcrhT32LWpbF2f1mNuoCtoZ2s5tdsnCsWH7V",
  "key20": "297dnncpHXEkm2sgXsgpH6uHD9xchCEx2sWqdSYvoeYVVhyPZdaNQssgfbC4rTMWY4Gk8FchnUDH4ReV2wPaWLNB",
  "key21": "3wweDtt3ed5VaHNhTWCh2ziG1AucBqtbE1bTLep6r72AyaPUJYgzQgVN9tqWm7L1fDjcRdr5E1GKHC7N5Ttsa584",
  "key22": "4JWcDd8VZ2QSwLfCHHfsjBFkYXsgn7DSepHeaqqHbpkyVqkihQWLEPntb8Prghqm6NUJd8nSkTp4KnjN8D1NbH6M",
  "key23": "4mKJty9XSHnNBA1W77Ffv3vohGmasByF4J3mwqJffodLgDDsnNcKKREidhYvcQgjB5Ahpw8eqi6AhgjCHJSY8Q8J",
  "key24": "2PjfgkxiywVHoLYmDshoVP14ppDFXvqybr6bsN7Wt4vDQyUUQr2pj79kuTqmjVPtojcphmjDNbizpdighX9f528s",
  "key25": "kyGoadCKw914wfdzJyCZccaSPFWrPGRhPukUKFEWbJZJGnXyJfSZpuuzVCwAcfCDMGdHT2LoQAQMyPJ3WKjFC3j",
  "key26": "5njKZcm21cRCR4T5N3bzKKnHojE6jnRMw7dpo5TYvaZXuaUFpmrsVgAdMSPcTJgjG95ekdYHjEH1E6DH4MFMYsAG",
  "key27": "AzXtiS7TiD9NfRVZAVbjhaDHnN39cXBumfpGKih4xFyMjtq1hGKxpPBhA1WbGbsoKJPKCrz2ALBbQKxk5agvcHY",
  "key28": "2FHAhTm9kiYZ9MoMKkfFqZtenUyyLUnxBE8WiZWKx37sQ9m1EnYYZCp1FRLqHFPD9HNJhY952RBT8SXNoPNDiUmi",
  "key29": "5r3DVU4ZqbokDtWxC86JLHAbjsm5Y8inGc7NcJ57t3jmD9CD5yV4Y9KsxPxWxxkr9XZ86TYFu66VXF5fbP9YwpNP",
  "key30": "3Zpc5MtJ72BNHHjwFnXkwkXpA4iMW19oYsb6MeZimrQs5ayNFDejQ5A6DjwiYhqy6QXHjCdcM31Av2cLhLTRAMGc",
  "key31": "4DAuftHtVjPupsUpg9Fh6LupesB8MdnBLWN6PEacxPiXb1LDyxwizgB3JqPctLBysKRVdFK3mjBPeYXV7ERe5hfz",
  "key32": "4tADd9vknDmikiCgcaG8vyabsgmQp6URW9NvN9QbkjbAJ9x8YLLxjPWKiPjZ9qZS9oHLTNfMxPhwNfcpX4BsVfJ2",
  "key33": "3GWLSiMkmSRi3CvZ69cLY5L2DYU5iWZXRNky1LbkfU5Zsm4Mg4S49bq7EPHjrwqXubybgruSCueHFgM2NnnCBh7J",
  "key34": "4zgEj9BK2wQF15rRKFKtFH3cYHLGgAdtDUotCyB1Dih8jd28firhg6Tpi6Gh6H9wo5oj1v84TykU8zbLJPHmDVzu",
  "key35": "MRhKRExZCqZGKuboos7wgm7C58mmXXJ6sTyd6dT7JymhwRJxCt3fnwp3xVfcWqPoTUyJS3EkkYvBYFg23Yb3iHx"
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
