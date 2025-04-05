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
    "5G97cGyEgPv32JRgPFZ7izaXijiMAdaZQ59HbdyShFGdtgtYeZVP6UZzcWwMJ7SJLejQ2PpFspYgrtQwWoiJbJke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKveUFyh7EarDUqAiU9VqaZofskc3Pxw2uz9xgguan3FMJUd6N1XxqnmXJoh3FCy3EhpuFsWx3svzRUbHA721C6",
  "key1": "3ckNFn39TvoPLvn43xRZNKx7vbxG27j166jb2DUDBoLrX84LSj19qzS3Arxqu2PhCqNGvmXYSYCzTXf6m4tqMb9R",
  "key2": "3jDu8zoapDMKzgXq6U448eKWoR2kf1dokVJGfnoDRGK8jaXXYemtdxZf3YLpAXzhAiQ3xyj2R4QrHUeP2rD8NL28",
  "key3": "5oBsnW1yfu93AvmfCDcRL1ed5BWhhVakec2xMENv1FEvKAuB1arkqsfKaKFaLMMJqv6NyCXEWr6vVq4aH3Z1c5u5",
  "key4": "5Mane4aJLQnaJQnpZPGX3oEuPCYWP2mPFBMr4wn2ooqVB44g3tEvd5cVyG3jZKqs25KHE35T1YjYG76wN5jNiJWv",
  "key5": "1bH4hPRWBMJVoxz9oqTJHtjDQVNTHfWMF992UfgLquL57QWfhhehKFVPfYMDw4NHGyndxLrHzBuT7Xz5MtvDHYC",
  "key6": "4kNQjeFohd43hi2XM7VKD1SAhc9mLXcYzfEJ6KQr8gv8Gu6WEiWhzoLMjqhvNE3nMrzEoE5EgHsuPN8oHNXcVTvy",
  "key7": "5LbH7HapodC4Egpee2YqmegwQQ5oxnnBA8nUY5c49PJXGcw4Avtasj7scrgkwwquE7WPnfoHAxWJEZ6KiTMnstqe",
  "key8": "2BBQj5o83tRSUXaqzQuRF2d5t1xnFhnrsCxNFPCu9XW6n2oQy1j7byfLEw2J81KEe55dvtwJWKLBzsgfqUTxNZLE",
  "key9": "2NGn5BpMU7YaD1o6jaUy4D3HuDJST2ZSrig2JHzHJisdFVSU8hXZhkJjrYeWfB1Mu3Y9dzEWXoCGB2M7Pkp59YtM",
  "key10": "4RhZNeFnycMMRcw4iGAhkAztmknWCoD7igk2kEvMuk4cfmyQHJxCPWhb8BAbsVHemCY5PEobqNpXgzQnmxQiwCoB",
  "key11": "4wQC3nAyzfbiE4SogS1KQdEWtckeL8Vdr6x1MQQ5iDCUiBsZCq9Y57iGBxCrKCKTZqsy2p2GShQ7VHMmkkxbkAWp",
  "key12": "5vbucUDvVUv4Qa9cTWMy5RjoYN1Eu72SHxs2e5ww7zT7wCfW3GvnJjhKaw3U5LKrtmCutRAggm9iTKMMwXQjAUFg",
  "key13": "2mUUyEDQ6zxA9fGCuonCbFQGvBdYYfAH9doAg8vZfyxruMbnsnL6XKGHuhcfui5TgkvUyp1ZaivZz5jhEywiWfd5",
  "key14": "2p7YuW9chpwsvaveJ8kKFfXhXUmcjmfAfXo4j9QkdSPWQCujC1eRN3j329u9L1yampSu9bQvgviBwJDid7CaeA3",
  "key15": "3mTgvM4ZtRNEyatdhLZtm2FMnRtuLexRaoFMaVampYs2toorCmGq57BdLtJN5e7totHhTXo9V86G3ezeFsopzy79",
  "key16": "4WiTQGZacTSrLmkW74LSmXuRNC1f462RJDuLUREJyDjREqQgHG14wa1i3oFR7pCTe8RraqRbufnw8RC6U7DAMDE",
  "key17": "3zSoZfT11xcVYQePyG3zL1cWbUVtCNUZv1njY8WdhBNqaXNTQbvypgyrYAV43MgJwxFYWWZzPKYKNrxtJMY6RqF5",
  "key18": "fpEWXSvesEeyeKEDrJjUKW3WPYjaZbtE621ajzRZnK4A3QePX8g9GCxAxJ6KmKkTSeXLtLSCqHJDPz8tP1jfFcb",
  "key19": "32ppiN8Yz8pZQvWs4n9XGVMLNth7n9v8PkNbr3LvwzFLhLKcc6CfGhiwBzBYf3iBT4ShD1AU4ecbWLj8ei1yJeQs",
  "key20": "2v33VMEck4LJVkwhz9wjaviUHkRCcCV6P4Kbgz2S7HQD8gvsXdYs4CkLUw891WAnjprfAfJjMqwEpEnVCzk3yENp",
  "key21": "3XgTXgpTL9T5CwRByt3AA1yoMbp4EQZxZLCnsTBjTdb1FWqdMw2tX4jLn32X9guNzRnV4VFrvZHoicWvYLfJjZGN",
  "key22": "224aTZHCE8BvaZDH3mrj8Mb1nRBHxcwSzD2yxhHY49ZYaj2CM9X7xZmWDFuBNKNDseKaXw23VByYUhfQhbRyPrjC",
  "key23": "5NRJiPP6TtRvdDtkGwfvWuTuuj528cnsKeAHWLX4saacadaTY4dNvNxWycNvK4RGptBBs56N3NJPRytJw45zRXo6",
  "key24": "qgfkN2Egx58nTkYfcmwVJmfB8iVq6QGmsFDNVeokyA74ZAGGAqrx7iWickBz7Y6v89DBLRU2Gfo2nCSm7VXeMBT",
  "key25": "5JykRL5ZGvDWtbpwcfExgbQKQMietfMXmRYa5DnSGxuUejoDuM9yK9Ugb2WgbsW1XEhMg5afuuEqcNtYYz8suny",
  "key26": "2GBVrMHrCGT2iJiznpZieWLomnFrGHRgCqAY1Kndosot8mYmzwf5Lwm1s6NmYxRdqMMA6GThjnweWoR7tgPEX7ib",
  "key27": "sM429s9wkrr8BBxtYprxr7keped79nCxy8GHDDzDBr5omyzQjyAMa3pY8KVn4Uez1ntVFriwdpvQtDvLgKdRPbc",
  "key28": "yoiiSRxjAUdCevyhE4VPhA51ewQcG88ipKQ6HEN4kZpri8xYHT2dcskJfuCHJp2MXiLtpGFjmGqoMLiN4GCmua5",
  "key29": "nNRwre6YYDT6eBpMgbALJQunuPCfUhA3oQTyNuAzbxKA9LotEhFaGzFWgjRFrj4TDcm8UDsJWMZu6ZnziJPC24B",
  "key30": "3SZxbnNW1S7xqrnw4QadgEf6DoFMBXSVQRkxGCS9RZWjYcZSYeSi4DNRP6rsB4M4fNMGtYfWYuLuSPfV5KLcJHbp",
  "key31": "2C83hP5vT8YfCqqfTtH3ReodKgmDJoKnC9phTiucHPKmkrUWGirCFRsobdrAKQQuY2VcEFoAtJ876EuR4uzLX5UT",
  "key32": "5tV43Awk63vpfn6FgZv5z3SMGX9kL66kRgF374AMKpHzHmQTqhmwEHM2eUivgupKBNjhgq7aSzwXi22WAcw57w1Q",
  "key33": "4UEmiv9TVDt7BcfYqdhT9DxoP38yobzEospZJt9negbzPG7HCJWSB39tKx9EZkRWMWxYVz7NKjB5AdUw7LnEnFzm",
  "key34": "3vJXDL2QtWiM9G3KLF8uDVVP14hL5J9s3URgrkeoCeEPcacXHmukFx98tt3iLx6MXypL9h8h2jsHvzhRovB3arVm",
  "key35": "3cWsq149qnJw1iph3Xd64ooT2Q2iDSV3MCxKhSPzGorfLeghvAuUgPATT1fc6akiMRo1jYaLewMxXgDq8Lrc24RM",
  "key36": "672BpdvpNMSquML1DiUjA9VQ6MB8FgyqKAQf77sQbchVvJ8hcgUbyJWerVfyzP5jhPHApMacD9TcruF9rqKM9HgS",
  "key37": "2CZwqPDPHb554VmznPWUkHMbiXVbDUca1mYR1zNuRZHoRfBbFPA6Z4K1p2BZzRL4iXq2V4Sr1VxksFVtoJxgVmNr"
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
