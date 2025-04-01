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
    "2HnVPzEfnrSqvnf1Y61TkS3rpDFJ8vWTEN6YLAMtMKPatwVnKVHgeYwr6a9Yadm25xnv4EphSxhMpwxpQJiy3rwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tTFm28txrC8YhqVr42XrqpEgjngTNwZ4bW7dXFYPPm4qMdvrP9LYS4Vwt12CnGp3ddsADCKYSwQtprpPm1sfB7z",
  "key1": "3eN77rm6whN4mGDJxEtK3cMPkECgoRn5P8dHw87BEkoFGS7WUW3FgW6qWsjiQN8xYP2X8uZnS6hyFtJRTkddUKUV",
  "key2": "4Kcd4tcDNq9Fq9ZYoWPYyVq3WCPvHTYMwgf4SNJSokm56jUmN9AKGdUrvTih8kvDgnTE37uiqUsnJdYifqRjAmzo",
  "key3": "4GB2QhK7YXgEdqEPzH1AUB1onCmDxLhHgKxnwaCA8pPRbdB7y3cqP2jDYvVgdtHJPcYKGoBYHcpG3GegwPXSACme",
  "key4": "5eoDWKwNMVj9AXuCn1WUTkquBphhHYvt7AsCPCGgp6tvjhaNcScvYs8mrScbA5TtX7FK4dBJBKBUojXeGbRDxHgt",
  "key5": "oXysL4Ai1tR2mwsJccjndXjujPkY47csEU47C1dxi9iPLuHPNJ1Lpn9oWp47XN54yBnwrwmZGd3pqZ8diJqMR1X",
  "key6": "45L5R3woxdr538tfsgoYgwQAdH2ob848euNgZJAq6zJS9d1Y41doLhusgvLKnuzqr4kCRvw6UgnKu5xmTF7nepKf",
  "key7": "5dfiuYA64C1zQYX9gDtuvBDMfvHoXKHaWMRp1GdmDzWrD64ygTKcjsJumh4Nqyg3BWNTM5fssUBd7sujuopbutky",
  "key8": "2LQCnscfub57boevXw7xfQ4DuzGExreo3AUga9iELsRbpVE8wrhha8eG1ShXAnJaEeVctj7SgjkVteqQJwFhzpmt",
  "key9": "5wy5BuurJmSdybrdcY872kjPZiGgjqJk7U7tBydzFr53ifCL3PvtRACD5cRhy5BdVfwKN1WwMayZer9G1GEq4V18",
  "key10": "38ve5mUdfPSEiuk3rVMBcHcnSsYXT97hFo3Mw4P12Sda2DpqJt198J56Vjn8gocqAwuWdYiJqPUggZeahBrEVEkm",
  "key11": "4NVRcFrriPKUXQzXNZvq5kC1mvsx1U832Sbat4foA4oyi2w5zGVeMyi1LeRwDb37rkzbHaiqHoeGRYcR6ndgPa4P",
  "key12": "46gBL2uoZSu9R42VuDZkoHceWFEMfQ7cfx4KWUqkBzvsfCVULoCwP4ezu8KfZ759kzzYNAcjvS3vZLon13fwmr2m",
  "key13": "3f45bYBetEU8gFgkCyF3NZ1ksxuyEgKgpY7LNBhXnbqMKCJT8P1uNCAyXwiEJMKc1H4GadA4NKZ3ku1JgWzeiUpL",
  "key14": "3nLBf2redV1vvmGWZSYskpk3iUdp8LsUyFbBhucR27QYkpFX4o1G25MJxYXbgjhr1vQdXdTaf18gvaCDiF7fkB6B",
  "key15": "noWLbRJVR8QiDjq294Hisu1sgB1WEiKuFAvFk9xmRNYJTNjKnZcSuaU9mmHgwnvsoRBJYaQ8V8AzcNC4d8sNpeU",
  "key16": "3Hmz4gBHn9WodDcLKiEj3998EFQ13fNzCzHNZEF4S3b9euVpCPPy95w3qbfVMekHV4AHvjupB4ksBcA6DuBLV9nS",
  "key17": "2oozVVqyQJQkReqcqqjzyWizDQTqLKiDCfRc36EG8B9Eqtn3Zzm4yXEd5XPpfX61SWf35BX5eiVGLkd5JYD5JHz4",
  "key18": "2hXdbVcnf4XoLLAykpy6BGjADc7H898dw5J6mYWNdZiWz863rQgqxuFYzjPVA4mvBnKWf6M29Xmmg2FWdFnjUL3z",
  "key19": "4WmBxEuFwPBq4Yx2X6QNpPvjeSxPDqnsCjaE1LyvDTXDjN1S9TzZdXvVuxJP8VWKB9RX1tfdav84Gg2bPWU6j2st",
  "key20": "53mpjU3nv4HLTEXPy8kqL3Jk45aHTEhGiL8c9rn2pXwPpGG5griSgTft6La75m6ojSzeQbhnhYg6xq6WEYoE3CqM",
  "key21": "2b2JwLgWrPQoiAN5GAT6Skc9pdiSqQYfidTwCJiYJy7RLydhK2h6mfbP7VCxJFZ7WQqKYnFFuq4pDHCNm6yudnZY",
  "key22": "2yjdsoNQdvfbVJe2ztn9U3nUdS2uoNS9jDkionWLE7xgMf9YXnMBPkpucVPQDjijD8YgAKTKbydxBiWARjMDsmC5",
  "key23": "2kkZ8nRVei9ZaF3ewTQACEa2DnnZZZos6KFmDZv8WVvFqod81HzpePBXRSo3CrufS3xsgmcArTdjdP889GEbDwsd",
  "key24": "4TsXgdnKYRPMFnmG4pkiAyseZXLJJeV8movTqUDmXtaXHdtLPUEY2AWNxatnJH1nsjXQF8D77uq1Qw7VE64ukcUo",
  "key25": "4vpyuYqyQDom9tND5kQEucfqQj5ghFx4dMzgGeMs5qUSFrzAaxHMNue3G6RH13ejHHfQKuXhFfMmKYjzaebEqWan"
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
