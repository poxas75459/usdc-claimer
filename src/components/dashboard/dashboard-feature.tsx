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
    "3c83X5Z8zr9Tbyny8ST3KaqTjod8kuTjTtat8y2JphDmPPBaY7Y7yAtekz8nrQNAYdtNwYGcVcK9Ee7ut8mz561k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6iAhJtPzayFG3ersGwEWQW14Tf1rHYPxQyniiJcfmHya8B26M4Mcdk7ncsVrtr4WwATnNNCWRMwzFnHyZZiXctF",
  "key1": "4VpApqKweRVLWnEnm6gLyptwY6ysiqGRq3o5YQ76QFLeW2nod69rgZxKV5XWMe8EAn1M1LvcY7yQQHFi51JcUUam",
  "key2": "4KK69cCXbvPFtqdNYtXgsCtLLcaBPTs2N3MhFabATvkjpDVh997uHQR3L9GPTRfk8QDEzmPzHM3P3stufZVgBAUd",
  "key3": "32jFopLZseWspVgDA5xMQxuCXV8M6ayDFX4LPfjRmtos1Q3uZhcTXg2TDbxTqAF61vMZwxZHsD7cjDzh5RDkoGB2",
  "key4": "2E77MsPp2zFPBhxYFEHB9Gginmi4CDdjDRyiZwHvPpYk465PVGWu3qiEZuD91Rp6hy8MGLVnymG2K2WUbcUcpeT8",
  "key5": "4LCThKevi9QCmCEzaetZLiZCCHD7n51ipQeimYKGdcKHcS5qFrhN2zjDD76ffQMG23dVM1WMMBan4HNGVijASk7T",
  "key6": "61ComNwFUvj9TuBTNdrEL3KMNm57rrLQJkYPMd2rPsDEUeetQqiJmxB62gLjwe2wiMxXEm9GJHh3Xnw32jcPBgNB",
  "key7": "42pUnjsfaFzbC5ueh6LyXocxbuUQKnKX9evsYMz632fxoTAgLCiEaeK7AX8cKLZZk2sasdth2D9CFCPDF68RD9ED",
  "key8": "4x2bixfBetMUbyN9KixweQFiQ9cGn6mXAPPJY3VgGo6KToyJV5ko8t5AbGZS14BukQ97iM1qot23p16BUigJ6goa",
  "key9": "3QHfzMnwmJgyXMNeJ6RVq6AXfBbNNBn5LKD9kfcjm3XhBgfQ9mWinEA6FJxnmUH94YPUC3EHvNudTQAMiB1GUB47",
  "key10": "2LD1UTdVRYT3zSFgfNmD3Zw4U4ucNk9giaqr49dRt4gcEAJ4HgKncBznRkibQmnn77v8BBRCcEJvXkRJgnUA4WWm",
  "key11": "wXcaPufVCp9ASHNQuwz3NwWz3mxB3HD7qCB2HdsAMSyxSdCn8sxrU7QA89vmTdd4n7aYrTcCBYgSkNTyVuUMd3D",
  "key12": "5MjRhmVdUGwFfSEURPn2e4QKm4pF8db58Dzhqp4L3XoePbaF8YojiNq2ymfG6zNqaNnmmNszrPNCGV4GA6mD3aEP",
  "key13": "595sDZ7TMgQ86LMZ91WCtVkntfuETq7FaVKozrzZCzSzLBR3XHhE54KLTNfzHzPAWiZfGKT2oucvv2ZAJ2KT8T8y",
  "key14": "3U23oePxWPMHpEfgK63MLe3qmHEsgjJqrBdcyUzLfzQivvBNj8F5brPvCyw8eYQDCFbLkM87AHkiFfX6uyZqmgV4",
  "key15": "52CRhwEADiNWozFyHGorCn2xdKUaztip7BZuaid2wuWhG8iqqCwqVKu9p2yhhZcznxWbNqtwwRdMUJunFegstEXo",
  "key16": "qZCAgPd9cNCnNR6vAmceN4FAs1e2sUjPCDCMrD2TPY1b2vvaTbPJbTfS5merdH23PVGKQPoL3rEdDFxJ8q7TuYr",
  "key17": "ykZ1CXtF16dmXthdUJFJzMoGAozWzsZu2SKYiWByxMqnexTo9fygvCVxVgiCCR8iXX6N5thpxYSp7xXCCGEub1J",
  "key18": "4B9ig2XiRVMmW9gZMW5Vv3UtRY4uw2L2TB3iZbUnp5mfJcjpjx9U9N19UG8D8PEhHVJufihdb1fMwYiYRqBycdhz",
  "key19": "Q7Rwy7Rz7tTV5rw8cgn6D7ery8vzW7DSHyuLVa4pAXV2HEKdWSeRYj1UU7wVwM6uN5rJ9kBa71MCr9jRbXhtRPz",
  "key20": "4jbiLPtdTBkKBtbeQF8dgHJdfYnihNDrQCDUVLpwPfEPZHQd5qhSpLQurhzGv4hJ8H86RWwv5oNCyWbUUz1phy1V",
  "key21": "3gaHNAFnTzhAF2VzAYmt6parkNY1UMqtbJR1vDQuKEoH7D4aF4bxasxD8wLwAdCfQcdohZgFQLN6MxU3HR3E2xbo",
  "key22": "i4eNXWDfZva7kPZZNhGHaEmoEnG1pXtzJzQmx4up4gbBuGfCzKUF7V1n9xtzSt6CuvR6Mpese8Ve3VYV8TCZDh4",
  "key23": "qLGTGAHpW2eB52K3LAnkDFLuvt6StyuPVESGyn3XbvUtayLNfk1zM1QoPUjFq8XTsuCuyiQsPBzqmmDYm6pmWxY",
  "key24": "3FAcch3oD2tCu8kCDZ43rFe3yaf5DWxYi4fgZZAdg4mwD64P44go1rmQjyhwLkH7pBD82KqfWhWUh1cbm8RpEbuh",
  "key25": "5vpYic9vaxmSdwkJCoJ9dZdixCb4jRHAj1y7gcgT8RbTWavpynYZRnANYP1XmRSnXviJvtKd7Kgr6vM2ukSmzcKx",
  "key26": "kUTpSWmz9FZRYRx7ScHsBR8wad2p346SYEUvv84esAwqpG9JptiQQKEo85Mx4sQc3T1M2NWFCo6ppJvHE7FtDEU",
  "key27": "3pSspeAB7rDF4XErxgFA51y7ZtCgYwGHhFKR8g3hbjJhGztUc61SKY9xtnFgkFpVd9XATBRjzax8bVtULVgzmkNZ",
  "key28": "5ywULEt4aqEdr5cYzZmpDGVvp3Kf4wRpPTZ19UhWqgBZpc4XHRRCTmnrEwm1Exwhko3ogwejzpP3nocUuWM7EN32",
  "key29": "5u3us8EmexYU9mabte3ZSkBXCSyrmUJK2ijpid43UjVMz8ggfAc6u2pZi6NiWK192WMCSnJ4SQ1ShvRZkxTsZfxN"
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
