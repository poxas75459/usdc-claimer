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
    "5bGVBkr1Ra7M7p4jqFzaC5xMvL13e7MWwDCqsiYmsbrir3zUfQEZxubwqFPgw7grRPe77sYLnHo2ax18BWdH817L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37HqUBKEE3DJ9JpUsE7fLjWPoA4oEPWq3ojgbUVPwR1XeJk4wnnrTSWha92pMisMinEfGS8vubiihXEFLmwaBkWf",
  "key1": "4F1EhkzYKG3GEtPcMoxEeyij2DcYX1ZDSDXd5JxkLZWvPQ93L47u4wwwnbyWQz5ThsYMh749xcWHpBjsQ2xkvu5f",
  "key2": "3hNgk5KdJh9uLdmhxt97jWQ5K3Ghp1tqmed27epjsWbm81pcWDmX6cEXwCrLqeH7CuRrPjLJoub7Za2ppUQ8TLnx",
  "key3": "5YVA4ef3WHvdC4Bo1CXZNmu9A7uyfPCp6nRbmwJ1ZFvUQzKtPeAxh3RWyJgxGDbVTKa4YV44UYcuXh3FCgF4bydo",
  "key4": "2KuhYU3vg5jEzeDj29DecT7MQLs62in2GjeEKgacK1vbdxiZAbLtEcSULBEwtXajvudDsD56fmib1QrpEtPStpqt",
  "key5": "44Q46TrZQVZEkrmSKg25ZLdjWpuoGwxAPjn36X8wQdKJ1d8hFJhqMJ3m75x7iNMjo5hVREvx5SWcH1T5qKS2LfuJ",
  "key6": "3XQHZj4joyrQ5WkqqkJAxBh4GkbzUy2wkKPfhbJwWWsrG1edK3tPM7TbQkSeQ3BrmD4CKdNPsCKDoyjq57GJgSxa",
  "key7": "4FpCGCHdYREUzX3q7rXB8uRKEMwxc47JtvZtSDPv5RnkaVX56tUHoGoA3DEd5QXypa7Yb7a3Sc8dDCtGhRVRVFeJ",
  "key8": "qsW6qEPRBA3RVS76RvA9sj9VAzZdRkx83bND6QYX8gPfrpLVVgTVo9DWCJbjhAbEj2HijAR2w9AzjEvy5HB1vem",
  "key9": "PZJzDdd7yq1ag8AHBH61odz8fsyEFbbJAhxEmGMUg1zBai9xSNC3D7nefjkNjxC2kMVN1xAkWfQwMSZZCdBrCNT",
  "key10": "43P3P3cd3XjapWNT6cUxUfTGistpLjarC9w1ujM5iEyz3eGmTFin3mBR57s4ZiwaNXJPfrWSS18xWT6he1oeRPDU",
  "key11": "2AB3YUKrY8sRprRMR3z2CxxEbpRKFMj4eS4FieWK66gmCcphxQbCV1Q9jL6KjMLTKnetf1AeLAgj7mHVNquZgrTs",
  "key12": "4EXCyhj6QUqysFgKgnawiDoiJxwTCq7oNCZBiYYvKUM5bViJY21UYzFBcn84gDdKdFb1g3GqS9xqmYptvsAFCLqo",
  "key13": "2T4pZWF56RWKUZszuZSwyEBp9CWtKFhE9nfuBtJJhtgjTZVQ4vQgZPX6KfAAThA4KWusLJrvz4UY1hvMMTHhiYHb",
  "key14": "2zU5qTFTsax16MSR6Pj1hWRLzaCSu2fMwh58qEAeCqAPWFF36zrLVjfThcynQ3MnPD1v9rq8QqW66QNfS6oKuB7w",
  "key15": "3H7JPYNKqNgaUm427BM7rFLSbUyRqWWoWQt4fvzeF68KnhK9TBqYZkcJYc97Ft5tZc9mAbmuLjBeNyvARpydwYqm",
  "key16": "4iStcxgWQWFPGikg47QBynFAEELwXqbu3Q3FNB8vFqUcL6kNQVTi6tUYEMXH5tYfhPypn2KBn1McwNyK1oXHxGsy",
  "key17": "4b1mjMWkbwRbxgyDE1pXF33GYPXbRai7DYEWAY9j1EQTkAp2Q5UFUWjae9WQbmx2ARGB1Q7CM4cEXcYiiDwZCzve",
  "key18": "oK4SEUAhURjf1uz7hQ7d7x1E3qdvXyNcMact3oymHehPxmnqM2MVSKWhLqhK1opYvEETA5Qb1sNvWFJ4Q2jJpvv",
  "key19": "45JVHMVdemsiWhBqbfH8BcgVvByRcHdSyJMthd6w9QjVjJDkz4kKj7FJXGgnyT1nkTV8ThhKhsUhsdeibHnPmj5t",
  "key20": "632RBo5SCJgnYDJaGNinZaeMHQ89Ly3bSHTPvhhfWUPe4Qn3JVSgAsQ7Re2AwYXXPANUFLPcLRSK3995B195krRa",
  "key21": "wiR1AjWURem56NciT1vc9G1Ct7TgK4A8ZxUVwtzPv77ws5XoJtTCRfBaaTyg2yXSJyvCZycjnSjNiA94XStbWuD",
  "key22": "3TJysPp3wMVzFaQcvvpy9gTbEQhAXaHDXkya8QPuNLFzxYWL3Xxp2YuJMDNa1vHYZK4WrucmMytV3M3D9Fg4CynQ",
  "key23": "3UJMLtBbJAQzZwDDZVU8pANyQjrEM7F3KAZqosAHiLdbM8vrmkb2QwCyjzTPobZfAS2h3QvqZsWHj3a4ehPZhNZh",
  "key24": "2Meiz6ji5GWhRasvPFoP4zq24oR89YtBkiEABU1sHNZUSmenAkPaTSKvra8LmGH1BA6ZzeGan286mMkDsrQuKpu",
  "key25": "oFcaCSHsNmoxA3E1rtYqQkZ7ZJGYhcP7RroZsWusHcy4zcwT9oRJdsqoQTxjPyZHFw35MMa1We2rNnqurUzZE3a",
  "key26": "3sMRyvPEzS6K3NbqRSfgjZRL6be4q5jBZCdDXXeRYPhpPwYjrYihNfK8E5zvEduHNHzGdPfUUEttYUs3Lptoujo4",
  "key27": "2xWNbTDcFMUd1aFXgEvQZJV3Zyomh1NK7cY1yJr7gJyVgzx7u1kVuLkVqPNN5av76rKKDdTibunPoUcYKCbrmP5s",
  "key28": "29FXTyz8LFxsSbN4VEfcSzTgh71mhnf9kkNKXenHrZkowsD53w1ttZU9LxGKpVfSBUFcEFCe7MicNkjqCRC6NQnq",
  "key29": "4qdrncYNkuhNdvVVW1FYcXYLbrw9V7REHWq67E8pHPnPjVPg8PZREiHyQRQJ2YAQuVgny5jEmUdip5tb7WcB5CFv",
  "key30": "GUpgXyxVsSk7hhuzMsm3VYHxhuSVMY92Ss6xKBvd3MzPZQgzM8QbzcYoAdUACP7AqfSdLGNUtBSfzauGQvnwvSL"
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
