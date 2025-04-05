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
    "2D4qUGprZbLjPYY9fJNTYLf5dDJ32GHh27vNMGnu9cZhPucHitaCbyScx5SGgNpWrXmQUiTEtvQrsv9RKhN4RUyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eCqW6Ej3u1fynVGSKAGBGFGoLGh2n1xeS9MtG1fXC6RneA7HyivzzwYqMndg7VQt2JooZkrN8eKoAHKv3LxG64X",
  "key1": "4K4SufwxhwVkdZfzbcyVuzE8DGShXrk5eZ1MVMWbvf9Zm7S3K3GtDkZr65BKRBxbFYSzxzkE1AFvPnQCvS3sixXk",
  "key2": "2cZwHP8TSemE3ZLtpxKqxvvGRhwHyn77XokcZgzT83nQv9kLUF7GVX9xk6zGvoBeEkGAZu3VVy6uQL3h4UGR5yya",
  "key3": "3xyx6fQGAKSzcYaVB1pMaD3Jr8rXvkKevXFJgTCfZSfK3ZuzH2qwwj7k97hzdVDt9soHZhz6KCK2dUGvr85pwfcw",
  "key4": "637fvvw7vz9aW1nk19zCk4HTfysxBovQNyC44oBnQsgQBXxpwzTiiDLxXNJHLnZAGXx3zcS1pKmjnZwrpDnY6QS9",
  "key5": "4C5cTvy7KhGyWhtUTr1bbhr6GhcMN2wZRq229rfGbgAD3ZkrBREisb1vy2SE5MUW9Xe18fwMsqW2aXgNcsW3vrD2",
  "key6": "zK54LoUKLcQeeeByvoLN1tetKYSZsQ5mZ7dqj2mrHemV8WhFrvepXvtBUYQATkCE56DrPiQDEcTcbJzUbdxLxFb",
  "key7": "3jsa1DuUmiqehh21orh3p5nDNG5eHigBuYo38KcWo8VM2PPrf8ANxUjR5pGvQkoizLddgqEbF2jKhyoKoZvPyoSW",
  "key8": "3KMEqmDKUNDeCzSYahjXJxftGLPzsEXsBwmWwyXtkLXdiPUyEwwZGR5oapnuxkvQ5D7bQgpQX5CxccCMf5wFVK6Z",
  "key9": "3zxSXQXafmmXpNWHoXGrpxvi7gJXDTyHVRiChEv8iSajuAZWn1P67LaXbJ5rYKs2DvR9a8NXsLNX9wspGHVGzbRM",
  "key10": "3s4qhgyG6Jt6z4cwWV9PAbkDUdxTpfuNhHXMf9UAQPxnw7zuyxQNJqb3FTGbqfkmakWYK3y2KKSojw2wz3dtV2q2",
  "key11": "4wTao1HApWWEndhfMPt6SN4dGditJw1q9VtEc9a79vat46H237mWxhj8AqL6FxAY8tPsGw6GoXt4Z6N1gPmqBDhW",
  "key12": "4ETkXpT4atF3v7HmPAC8FCrHtZHMe4eSQuXQvtSmnjZeruLptCgudmde5mXMEcjDaxQKJW134GwqutEgEBnnx2kD",
  "key13": "xowpSvxeXvNmbF2MhSc3dCh9PXmEmd8XgUhKGqaurRDPY5rycbEC4ngRdU4bUtRA1cKqdm31zEun6bnwxAYCkx4",
  "key14": "4Tfgn1tisuivnYuy23DxpW83YTDQYzYcFbPJZaLBgNDUomGbhdBfLiWGkm8s8SMyDZm5dhq5Q86t57TyWhiE2cEQ",
  "key15": "66X2MtMx3JEFqrLmJkyyrjBQWkA8fa9bJMaeiCvyf6cNyFR5VmDfhMwMLmasr1oVgfqoiNLcJaQSjJfsFNhra1rS",
  "key16": "3SWJv2pQZVzPRLfJvifPr865MhpgASDej3EseDchBpSVyYLEpMvte25nWLyqnFhT3Sm7W2Z9swqj8m797dSKMCYe",
  "key17": "3YRvh7tA9TsVBJuAo5RxmgbrwREQPvGEw8JZHmoztwLbPyy2Gba2P7EYEBXZeCHEYAqvPoiWM5g1ksZAtLKNCjFd",
  "key18": "3bu2X1p2PweaVqozJY3kvAEXn4idhWFdQZP7RveoSRRmjwugVpxpnqjotcNPjSpzRd1wxbRVFXq9oe1ZKCnEXqTe",
  "key19": "3o27ewPun7KucBJiq3wVasuh6qxbQhJEprrNYc8cEVCJEJ9xq1e2BidJd3fexsZRFNRd8pDNQShEoDk6wWyCpVte",
  "key20": "LHDTYejv2aNGzNEyoRFHMFanPeuRREgDEAoZm6qTwgePuPNpPYkrhkkKS4ci3gVVrkdKq4UU32AeawnuzGwiosF",
  "key21": "2rtBQPeQ7bdH3bHWbcxaatfcS5cJUi8oDivKc1GroADgXoxuSBbuCi85xvSeBfLF5J39YVRyt2W6CgruJjiBVh7X",
  "key22": "3Hsv7ece683wiawiFxFdUmgHEJVoFa2x99fHwwMuvUg4P5nJ1KPg1vAGegXJC6HV7VQjtFKd7dUPdEQdCEkwkk97",
  "key23": "odiNUjg47wC4epfYey1Z5fugc57f4nRyofFizhdDzxBXZCwRMnj9efbgt9xKQUrRiFCZBs1NVgWeY8Zvn6CkNQe",
  "key24": "5sJQ37Cxa8RigCxWBg1tUm1UssGgQDJYkdEEGFAyvEyj9cbVGK6FUsPMAtMNtUi8a5d27ktMhbGEmHK2qf9ZWMni",
  "key25": "5GM39p1XozTx3d7uvQ6LYrhwRanG4LJJKx7Q2WquanE2ebeb1DYbGaKPhNY5isEWfKmNh3ALhyTLVEC7VZCokUfi",
  "key26": "4CVUvmfk9XVuCHSbUAQkXXMtMs63PzMuoVw29s9Zr5wP9BPhYXBZDTzUA1pkWEif6BwmXpNj2mu71n7nrNPjuD3b",
  "key27": "2JKoaQeQwZMFsg25dv95Wpd5PSyTqXPvYaEGHwAq75rvdCrUEuHpASAT6oaLcun8p2LiC6656CicNBsZZjShYPSX",
  "key28": "3hW2uyMqUc4cdcbd76Zk1QNBvZvBtmtjxtK4BcX1EfjHCYbhZWZ6vhBhG8s9Av9xh5FXd9sTHBCScbAtgAMZ6G7W",
  "key29": "3bcZN9weqDWiRs2ZLG93vKPRXwYCEmydTGE7yreWFbFXCyd9MDp67wrmn9H9m3NJersaZhb4qNzPaeZc9PC6VmJz",
  "key30": "UiDxMDm62B6hjZST6B28fooav31AdfPoCEeazxxo9aZEFVig8nF6xvBcoSQVSjHr4xXVe3Rzj4AEvRX7gYWe1bR",
  "key31": "3g1i4koyHaKnnn5Rv9dmBV773g3mbyrXoEQCkQkUDLa67hhDCM7CgiVQLTdakc52NxWYKnU7rcewi6AUbWMssnv7",
  "key32": "2iq96TJCrTne68uthie6MZgaUkpW1vRi2UHYeFfbwi1BxGTe2CTrFBzRDhykPAozTjuUfSBZcKVsQwLiJJGGfq4w",
  "key33": "tXmZTaXgbKHVjL1CsG3uNchMJ38RAFLs2wPgA8Z8ta1WXRmDzeRmh1eKtP5n2r4RWbPM8uyoec9C2Wp6xGLZSkm",
  "key34": "5wx8ngdmpQrzZAtxSsxXimae3rAg7HKX8gz7zqN8xdz1bBfif96DFk83XojitX9w2Hj9h3KnWvD8ZuqUpxU2fzdd",
  "key35": "2xzXJmb8jyoqNzXknE6kAwwpNbWyxtz2o7GAJwvJVrYdjikhxH81WqmshneV9tDpC1LCmq4ToztzESq9vpFSLGgQ"
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
