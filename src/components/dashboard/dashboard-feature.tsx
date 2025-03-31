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
    "4Si37fuGrmAfnA8ZoWkbfyHg2Y4TUk1Bya8ARtJ5YMRy9yCQDpJTW3YM7PKogniahYZkeEUxzzsmcgSDQwR5WD1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yGn1oDuGLofd4aPQLbpC3PiVfaQJFGAabteR5VaL8wPMKc5DgiR85Yki6k57uJTozpTkhz1UU15H6yVhoiHf9wh",
  "key1": "3NTRNQ22kA6jsaxJFYtyFNWz6FsvpZTNqcnYG5UcjbHpcdRUvsNUeVyRT92ANBWPtExHnhRRh5WYyVgnSePxNSdY",
  "key2": "5vGUc8WWRWpwwW9YrpWn9sNp4MTgCocxWyvypvbSvHQqtRKyAnZNkWbkjHZfumGcjkB4Uy2ZJbmmXcdfEtnhz7Xu",
  "key3": "51esXywGgRjzACcbp1vCtkB7kyyQDrFGXLt5MsYX28pn2Tb7ReuHnAfJfoHawfH4oJhbAkB5bYoxkvSyktuhnRbu",
  "key4": "5tj3RWNP2q99P75fJYVpNcpGqyHRMqwXuSMJjwNHCtkov5evSvkvzsBm4kHzEcP3PYSTAFW98Px1Fns8QB8U9J3c",
  "key5": "48Z3Bc74tELKXbj8mpH7asuBN5qXj7C83fsshDf3SYipEirAeGjt3H1jfLNp5MxX7XRkn625GSr1i1BiAGv2cp7u",
  "key6": "65JteTZofG5egjftgdGX7uFr14T1UyUsa3Cqxr94FSnjpNChBh5vZPNPX5ijKDhNrsSo992kpVyYbhTbjwnkppiz",
  "key7": "4cWfkbDzrSsaDJY7PK5b68vvF3J3A26aPR2niW3KueEizJ5Ei5Mk1WVMvkdkJNMhL1tPHnQMCsjSds25WTTYmND1",
  "key8": "2BQXFPBWXbxW1TgAToEgV9Qf6ASpzPe84sewQqnKebkBg86dguT9dZZXmdq8XA3o4b1kvbX6t9bpat4YpjbfDXRP",
  "key9": "3Lke5UrFwYhGDXduvqPkAE3iUnVcPSDvJP9p4ZUEJBU5XR467psZ2TEUptpvxGxUSzsQMz5FUx24Z5eyTsPFsXJ5",
  "key10": "27tQRRma3bk2KqATCEwXCWK9swK6M2hk2k5CFBns1Hg7mipYTv9aiuq9HGHQB9MVykFG4HDDxeurhqPc6geyL53x",
  "key11": "3qywhmqNWisW3urKXqX57UDCdre4WFxFERhJhT56eBasTj4b1Eop781LtRXVofkipRdDonZAS5j9GYL9osaRPJSu",
  "key12": "2FZFGPsnD19mSeMkvY1UBjyzJuYzwo4mhB8QVdXPesLK22V7fztq2stiAhLeKUd7YQBR7UJoYkmGAg2uYRu9K4z9",
  "key13": "3HAEJYAF8acqohyyHCnU9qqsSJ4FN22895WobUwWRpvanKZuNWCD3bpzPRKRABwCb4xbGGqRB4wkRhuCf8bdsHUL",
  "key14": "388i4m6hVA3duGtYWyYaVgddA5SFoEnQKPYeRJtDfsCe3Vz3ytEzUcYaj8KJtW4Gj2kLZsHvBSXRb9NPGsed3xrR",
  "key15": "5PKKmdxMd4ADZN6Ny9znTXoJTswZfyDz4jkwvz5TJwpw4kJHXryue6Vd8hbwYTMS3o1jWTjJ6sASr7jpH9cmcCNQ",
  "key16": "59xsp3AKP9tAmWbqcqBY5mzHhtv5AT2rhoDAjzzDN8hhL9kHmRzBDhmcKEpxQUmFWPHGmn14PWmx64soZ7jMYK2a",
  "key17": "4aPz63siXk3h5A39JHfnrcyFecSg6Mc2ZZcxUENrffsWeqWB6KSHRTTq4bs99AevSiu79bfxo3bjXbRzyfcLJdPf",
  "key18": "3NBybkwpbLvPArVXSVgjFNwDziaWaRxfsZ4tddqBSmCXAtK4MufFnqT1UtmKsAhzLaDwmzf8exMGys3qWjTtD9fE",
  "key19": "ccyxiD893ezW3dMCNNCWV2aSPtgQBfFonro687wqQR1saNZ96Erx7EewHJXUH8tZh8N2DdVzkMQ4SnHYDTBQnA5",
  "key20": "3LdvgqvMdtix8BMCMakLW7ujJi6ScjUEMsLxUy9cMJM6dQbNGHx3FGgxVF3beM45bxMk5wph45zdMBkXTXE9JqHZ",
  "key21": "4ME9o68rCz7UxiNMLcDSpdrFdbtwW9tTVjs6xtnBKKnL1zLb4bd8nAk58VZ5AorBA4xuZP39KJc2eU6rP71WAqr6",
  "key22": "4NQTjo1aWAYN8CTx6hxtSLmh2puFPuBVsGZK9cWRBgTS3nb7pfshtnVKZzHnTPYpfWW9uAWf4A5gFV7ME3P2f3BF",
  "key23": "jtAEstjH9CFcAwXXx9T8wTGZ6xUUg13Sdzm77LtUhM542LFKQN8V7LeKFCtKohVFPFRAmRXcu55v1agnws2engC",
  "key24": "LfVPbVEeS2ogmkUXqbk2gUMpTX82tWQxPXB7Ke1z3ps98kYMHoaGWyPQKobgZLLr3NxaBt97LCteEb9MA5E6X4k",
  "key25": "2wAaCVWvYvayByb5UoDdkaQsGbiM8AZkUUUqQnDYoQdZbvLDG2Qt9CSjZZn2Ekifk7JfMLNv5PQMg3HjicZjrwLz",
  "key26": "2pkMwh7ccSbo1QEuDw8F7QfJBodzTzj9SB16t2gzAco6QQKdighQDZdVE21MZjoj9DQi5HsFgmJ6HWE4FrGVV4YG",
  "key27": "5bXHAE2VwAA9P86xcFG6qrsq5UAVuaVyphs6NJsVPFYwUJt4vudvdpsBdru79KReFoH9NYodWX3AWzyxNn6L8xaU",
  "key28": "5wxEky23EQ7S8KySfm7WornmXVYRW6qZbg92S7eKsGkQ77R2Sy6F4bnWXzKJNpVjpumsNmSxrdk8xQbwotsGKAJ9",
  "key29": "zNYiKV614g95DLuWxe5qsLC56k6KuTQbN7qg79iDZYXzKyGh5w9v2RnwGo4st1cVRZLPXfRkTYaJDcwTVG9sQnn",
  "key30": "f8ryEeXB7jGWv7PziioNvvnTzrJNoyv6sFohBRAMwGcs17JBjNQzot52Hj3vb1SDxEKWzjCH3Fw2vWkN7EMLG9u",
  "key31": "4zkYuHPpYCuQMn7BbNctpqkih1W9mUqxR5F12J9LSm6YMiNx7PpRwjAL4JfyU1pwu1rnxaNuz6JH98hEKjELkykN",
  "key32": "4noVsSq8Q3UPdeZuhvv4GLUYwnci6vek1vg1LowN6qsfhfKkCaFJ4MsjDSdwAD8MZmywg7DZreDgLN1G6T1McUo8",
  "key33": "5C5dTbVAUDRAzyofyydqbYYS2ojx4Lv54n8C5jYE4UH46TV3tQoKQ4NGKcJzQTNUSyXkEh5uyNow8vTeeaYQixdB",
  "key34": "MNjhz9163opsbKd8orpNytSVTeSDipCjkTSaLjUc2R5VzSwVPsVbLmK5E1HAbgd29Z8cwzS9WKnMSSxJLaxPgug",
  "key35": "5RLN5JnoJ9knF3WvkJGGcKhn3CVNSiKiaoY4RfKsatceeKfMVhY15pHV9z7FiDS9umSHewYLSSqsTfC4xAZfV5r7",
  "key36": "3XyvZfasMVpVZcUkyxCiedPMSChawmJwat3xwx5UiP9fZa9LWaJbCHWTWawfP8vTvXBWYSxgGJZ4yk7TgCwGpLLS",
  "key37": "3qvzWMUZuF1BbfUKtKSMLWEZd8ndFPpjZpTBf9JY6XUoxJg4XwAEJ1CvxQnpnCqwBLTWWdfTrbwjk3vVSyLGBDuM",
  "key38": "383ndWnshPTLq9cqXMLhsrpBphLBjbS92JgXzT8EhDSLv2UipCcJ8wahGaB6ar2QkWW5i3LmWYM1Ap2njMShT9J7",
  "key39": "4NF1W2BR9MMDkSEGjU9S3XCiHMEkTnCnWxsBiJGzCoYgY24ybiMECfBA4u9x8L7BbuD39vAVyBGbCThxs24SEbnG",
  "key40": "3kWEWkbhohcXZZUtMUYW8uTo5mLddB4Mq2R98mJAgxiNwwfnY1P9cMU2bCX49Ky1kowjeyCrZ11KzrQsaFzwiKoi"
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
