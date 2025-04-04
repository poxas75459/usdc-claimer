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
    "XJYqMN5hReMq83BUEhANCq7cD13kpvdVBMNEh6DoAbFmtVZctJbtoxDJbbVGNP8cpQtgKwQ6vVKHwTjSjXS2o48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UddJq6F8dQyNArrEiGkztgkP62EtFrYYNFnQYUof2F4bVwqpaEWzW17uummdi4rDPirGxZxVV19obMXYUtsZBXw",
  "key1": "2tKyR4jrnWkZebnsvgbeyUjdbYUBhS5jGHtDD9doGp6YKnPdE7eKWFVw813GwSCRKA9EXVgYpyDvRZBPi4QibhXS",
  "key2": "ZzkErTLTWvaLHr6F6k4jTpNih9vg4PVyMf1oMKySv2GM4EoKJoCxiXDyJNvCP9xj5VDyjmyRRxtXEmSRgjJEjUC",
  "key3": "jq2KLS2F3AEC6VLWVw2ciyEBLET7aU2Hq8j9LiL9Qax9saPPRgM29GqbreqiFxRHMHQruLLxvHAV32b7Ptj8ML1",
  "key4": "4FqPswfZAaRtBB9LA5u5zj4JY1mRCzoKGh1FAp5Bsp1y5t7UhfpAwLUY6Pg3vSonMXtEUXdmDR8FZUNMy8kstuGT",
  "key5": "5nwXCBwJ18Df6ezRSzg1edszs7y5Yr7yP5W1YZNoArpbKQtZyz8H4sDnUtht5HBL7nPuG8Uj6S7yY7AcPBiDpTk7",
  "key6": "3ME4qM9ZPy3TygemcqtYDLVJwYFyXya9sMAftivhnhJmYkC6YuGsV5A5ioRg797bM9X2xGPKFCJWgeEgXSKi638a",
  "key7": "5A8n6gryer496kMJN3ZqxtH2Z8sUCQJ84vJJoNmLcjheLsQ6ziq2LyU52iq2KG2Bvh3Ha3s32AGo3XyuadGWPuwC",
  "key8": "2BvuYtWPw1w8QyWsRZZfoqkYwzsEJhmfxirjq9hbphsmvhDSEjn2s8X56Xt5cJzYccXRt3uyFkYRVAs9bPYhDrpe",
  "key9": "3hm5Bz4ivXr7T9zuk1q4917Gv2kLzy65kUAczHuBQsWouqc43dro3Ay8RpQeKbVavai9xGiUSxKN9ANT4of6T94m",
  "key10": "635G44gUUgcaPoFTCaYivnAnb8wyN5gzPetRKmy23sgf5QvJSeUSRxhZyuwqtMRBJ3SosPVcFWLU3be9kWmcHHZY",
  "key11": "4rZaKtJ6HCkqAzaCARj6VZ1EeAtNEWNTGUPRR8nhuEuF3mtMHhwomrXBjaF8423HspYBQs5Z935vzAQPFBbWQsnz",
  "key12": "3ehLM41E44HWVhxi4tdPcDy4FBAGbMo8Gb79KPEQBNCotxvQKPfAe58TauEC7s2pHETmRnMzkmudh8epdzBPg81s",
  "key13": "5kKJks4DzyxuNZSQG1r3wm59cLF5yJuaYw77mVdrrpL31k7sHpJ3v1XLSiQmm3RRj6BurwX2xayL91HNC6wqXfDG",
  "key14": "2KBAXwLX4gSP3Hstp57dkja77SEHnSXZHDWRG4ZRZDVsZDRxKMq9kNLuUsNEhbk2zDREytLMc7FVGZAwqqouW4Ce",
  "key15": "ZVqexbUB7XxkbKcgtTFANrdBRR6A14ZSdZMUrwJAHfRegjiTv77KboRfiGeX85WUrSu4brYAKPyBfsucpCa6nMH",
  "key16": "4reDXBZLe4xe4Wr3rkABAiu8vbY5hMVRANRZd2uxnt67wHrzVBLbrwLESLjsmr53ogB7hJAYDAufDvHgusykaXxk",
  "key17": "2JQEHJPrLzEo6rcdUX7RYe4tCgg8LkBiEV8kiUA7oAanT6Qou128qQi1xUiPPgfc1DLUWwXyWnZ5f1fSH7dWg2w2",
  "key18": "oPkGWu9JbW3yeNSTgseJxQmBkJ9c9yri2uU4ssXRNmFFc55kTQRcv9gMk12h5rS35HdSu5TKAcehp7ds6avKtny",
  "key19": "5hsUGqdBHuEZwEv8w1MQz9KdgNBrRjvKSJtkZmsGNN43J5FBbo3MF7x3nMt3d8EpNqueUVyLg4GkcikHnfARrY5h",
  "key20": "4atNebqXaeLMPoP6o7ZEiCrXzRFvvVsd2cP7BvCazhppmUhD8zhazSy74SyszvctSiovpaRR48PhwTLGgoupSyuK",
  "key21": "5XPbEd7WX41YLq3chw3qBQisfCLWRuQW3ocNx3R6x36NdttsGTHE2HiW6ouyyGbNAzx7Lt4gQhBP4NPE1LcqSxQY",
  "key22": "2tjsUfbP5H856rh35mSyc15SY7Kz7LYokhhoLZk1G8L1t54oLavUNLDEoYcwWwGVTNkn4Hv1A8Evn4vreg5oNMpz",
  "key23": "49vuAnaZ9LShUeARedKX3tYq6kKazV4ZprsNcniUKXzLNuvX67QxnhQkqK13PYLiwrm882DwcfBuJPmmuqnjCHTt",
  "key24": "2w6jCTU5LytAHiqGq9Zqru1WnNVgKpkig9cwbf3HyYCFinyHdwbDCAxAHovhKkuVCC9myFECg1ycoczxDBSKX7ko",
  "key25": "4zeTH9vBCrw2GbicTvwzm7rarprnRhAMR6tnRrGjvdX1vNR91FXEht3qb3Mh32uC744fKiTzVMTjAjptVhjt3Fsa",
  "key26": "35AA4y8GtGNtQ72L6cW3tD6iyhNmemJxTowys7tNjfhsg6SUKScEuXF2QhmE7wdKh3bd7shT3MvkG8BKvw95NBfg",
  "key27": "2mkSLLnndxoKuGCsnxgxj1eQ8Ut7h4EL2gbwfPFARkq2gZXegiXwECaaeJNUie4DS8NFC2ZPTTunSZPQvv3EM8rL",
  "key28": "37XkeDzoh1i5t8Xckk73w1xpjVRBafX6b4JYLWiV9RKudEi5LpyVuqHNLXRsz5MFovHMzN7MCEwvBQhNKDiqyxmg"
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
