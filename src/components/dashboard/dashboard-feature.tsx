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
    "3tj1LEeFGnk6Rp91dt8Wr3Cpn3PTdfssgWFAFToRSqyUW8bzL5d8eRk9fY7bP44qKC61QfLiAjgGiGZfxnZ28yLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dYhHZ8CxTU9XRiaXEERP3rsDyMUNCuPZQE9mqzUpkyk4pxUNFHWeGQbY5vweoiob2N9CXZtxp1UdwVDfWMbkVtd",
  "key1": "2FcPutXi8Y5rakMaQBigu5thBpvizweqsCmw8KGfZFBZvnZoZzYAyKgRxpvPYxcNZnZP6VvPSuRkoiE77ra5PffM",
  "key2": "2h8SaD6VHPGxqpC9kFW5sFf3gb4QBxQ1YfriXhTj3KB12cfqJRU7Hu9vffxeaHo4VYw63U6xy5SwCcdYVELFcJhQ",
  "key3": "58zjZu8rjpWVhGfcrsNAGUuXeLNJzoWeG8DGd9ykXgRMPdZZKk7jojv27mSo7imNQrts78Je1oqYm9vtGnwEMFdZ",
  "key4": "4FLM5Qrdy1Tkh6X8XdCgymnSZr1jckKxkMcm78QN7i9wxPMX1DAEohZdSDvrTRfo56hwBgXoR9UaTfvDMLtWsxfL",
  "key5": "385vUrcSYt9dK9SbNv7RCbpFrnqFWVwyxvgFt3bP8eVRM52JroPthn5cAZ3bv6215EHXMnKDoYMbzMATwEkZZC66",
  "key6": "31XUBfa12AwBjHrmLDHrmo1KtE6DQdUa4cKxhqspxQ3RdgANCK2vgGhZDG2z8U6QmV7uu97fG21fR99anv3JfD9F",
  "key7": "44u7vs6tmhAL8EuH8r11MD73BRBtxyrTizexVirUCZyNissmu1JQYA9XdP6zx1d4TEauj2n2S5sSp4ZeEryciZZh",
  "key8": "5TPw6naLsSXrtM29TgyeSSHG244YYtZScsa1neQRDCL8bexKn5z1igByjaCZmqTCedvz9naU2DknwpwCXetyExUt",
  "key9": "2gMAKY5Z7CMyi9nJrryeoogRirXcHVWbRWagtin4WmWijTzduxA3GWNJFEAEb6yHH7mqMUqhPdrrvY4SiGnsd1Gy",
  "key10": "MYXQi2QnS1aJ6CiusGo8RYo3NVSdHBLtGwqgn1wGyg5cyToSfa8k1QqxnicydqoKZPLbpMckCeQayubTjqUdrZB",
  "key11": "5hNa3g8JkNM56nL98XPiD7SGp9cBsDxFLDrmcPw4NVKtwECrffoKyAaz1M2xAy9HUtKom1522d92ZKYjY6uyXbUD",
  "key12": "5Zxiaw44aqbmXLjwfgCWfwrnixcTmQtgNadfwHE2QVAMtWAjFH9nav8XGcdTiQBsHb1Z8xNnChiUpEajkuXtXJXL",
  "key13": "4HrdJmd7tnoJRvB9rZ53GXR6Yc6atUfExYPYCxc1chLXaKzwQHDzMaqyjRfH3M5TZiEWntQ3oTRi6ubB3ai3J4GA",
  "key14": "8qmxxmjWvYVNgH3wsWNSXu8TtSkbzCGtwg1x3jj5nnkPFv1zZDZepEdhkWTQfFjbooUQG5c5k8p6RnTvCNTfrfo",
  "key15": "4RTu2DG6idNuuhouFU3kpwKscSGzvQ8R7JJEmoZTUV4owYh2BKHjKKusZ1YwtJz7KS7AHXY6iPewqctBhuc7JoDY",
  "key16": "4YjgiwJgpe8SPeKCyKdXpqm5WjEA41XgyFKMoZMhyRCe52w7MjEnmoorVBQCg71v9QWUX8pKyRRsgptqAu1rwGBC",
  "key17": "3ZvGZd4hsj6Ub3ZGPyPKzJm31RSDLKhW9nrzFb4k2wwxBABfcr3aS1Kh7TxgRt9WtK8EUWCtRgWNjLG6qUVdp9QW",
  "key18": "5GvCt62CGh7kFU8x2otgx68GVm1ujk2NMP87TX2ygj1HcVWL54tng81Cs8ZPraaZ4FrfBcmq2rnBEGY7icb9N6yc",
  "key19": "44LxTqGhJjYvwWxMkB9uopUHcrTXA9LQVeoAovZ4fr6Q3GFu7qm7AJ7Pd6YszBuJaKUoHdtU1M8kZCwpW91BepBt",
  "key20": "2Wyc833SMjjAccsujnR1djTL1NLQQ8MRmL6FcMrye9Fab4vmKdkrwQBVHr9dDaixJY6bvh3CksDnEF5cvcEQyNxF",
  "key21": "2ZGTUVYsPd4GJ7p9zKF38FDPwc6BjyHwtXFF4vbcyANtLMWnKFzSMxQqP9NPr2r23qhmqtWWJxppZSVTFRyALJYy",
  "key22": "4whWcuS7K3sQvZvRG4LGkNg1iB57U4B3BAVmuT8ZpRZPd7jE7HGiuyXWA33TW6HKCgsa7YqBemcJjpbZsHCexb7y",
  "key23": "35GuT4KChSawo1vj3baBynWPGDNdRg7J55cvXRJv424eb4ZJRu4SaRfvQNZf63CcNp1mfiUBhG3rARWroFFCPWaS",
  "key24": "3uDSwwXYcr1T9QattM1AsBdxciEsNZ3EszJT2jnqSPh3DsAgvcpnzxN8d6nhc3qy2EMYBxY3DQjKH529DfyZps7T",
  "key25": "4scY3Vt4C8n5igcBdNGfrF9FSkZVn6YgWmpLrB5rxNDB8i72dYuLudK8NCixCT5W8B2FKirPK5LCD86BFoC9iH24"
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
