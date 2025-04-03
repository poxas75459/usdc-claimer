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
    "erF812aEXNtRJoC8JK2VfaCmdPixSijZ25EwExujaG1WuLbhv6SrVkhyPVt6kuT1uix4Lkaqha3nWHsT4JCSL5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UoXqZGfKXdBMRA4Kue3PEha5iZwEJSAssE3aKcxSspLAsVgyYevwxwDvL31NRFDYFQmuAyXT9HdkZ3zMLnfRwr",
  "key1": "UEtvZdjyAiusQch7pBu2NqL9PmP7mDCCEcHTaRUigJX76DHWrjyobgBHCNhDoxp2vXg49AKSyjcFoLUhHVMN4gH",
  "key2": "WjwxprMGKP3ES9qdCXmaGQYgaxnMF59PB9TSD2uapnmXuWGvXujPf2D4gCK9Q5DRpcz3Y6ZCcpcvnDRScuNGxRe",
  "key3": "5DyVhY2hQWGnGGJXbX6U6oFJiuhfz8u9VfNG5YvDEgTYRnw8n7ju8v4biXS6EtDKDyko8utxB1PAWFsnsENVaPU8",
  "key4": "58RYPTFqDuopzeXmMYLq7UrSLnsYE6vVYLipXFpuU1H7rbsvBJNsBEicewpzXbmdZcjTBB4HSBS7p1H7S1seZEo8",
  "key5": "3nKGNM1cPjbsT6WhPLg1EKV2xsJ7Ucq4AXDv8o33ChHFM91bW6oGmqYRWuzhMcabK5pyg9uP9H7jdNXUijTRRVoi",
  "key6": "2oGVr5Hnspbc2xz3WYnW2ftyWyWnATLF3digjtZbJBBSp8yodSGsLPzUuNxJ9NMrac9gpuTS72d2HeNVnbVcrzto",
  "key7": "Bqon1PYyyFG8oee5APZEQ9vkJ1eMusEkbUynpMndTscwcz2vRRcLCHpxgneNq6qtbSNLqKMFaH9DmYLPX6qDGKT",
  "key8": "32CfXsr6pJesPGbQipu3v2ePS4dqt4ggn2oNZ5PpKq118TXB73yJvQvBvyjcTmLXLN5HjGHVdBBjsKfzq3oLTggD",
  "key9": "4EFfjVUA7UFMR36keyFuDXxmhQtSy2brpxexBibWFKAunhZiATwWyvJwE2F8o8i4hyNrMY6T5oTWinxy81EjRU1R",
  "key10": "4zN1DsQggE4Ww9mU5SSE3PUHV7WYasxX2iKncUZax3kdDaWB6mcV1xNskBYXk9GKZ7JGH9BwLH77y3Zr154pDL8G",
  "key11": "gKNq1rQwWvdRAF3wuNGCUVcZKv9EsubF96yFozRzBci8asMEZVgA3sk9HBvnuuTVEseXRtTVyVJGYggiJf8rfaH",
  "key12": "54PscJo4AJZo4kxDDxK7hiF6mPL38AZUQsMP1YwUoC2xKBH6fciru3Trfw52GCrG5WP5dgivGppjCuBAZ7GifmCr",
  "key13": "2neMbu7cksf76HpNrVkqTq6gdw8cxjcSs9UPx8kqAg3Usk4vqX59xigbq7z5DdwtkjVPytndVT28ErwjDhZsdxt2",
  "key14": "3zgsfmSd7Raw39tXYrbZfZRPG4m5kyXudQrGzmRVSrXDDma58cFxAUMJNotkA8yS48r2s3BvUras29edQPmY6eMv",
  "key15": "4Xf3BHJq3cwy7sowwSkkTAi3o5ZKJK8wECZixXL6nPbMfvovGi3zP43XPLHyxjof5zmHTuLputaZ7XkP3kHoTrvR",
  "key16": "2BVqChqSZMMmPNfuQYTQ57ujh5LJFB5tAgCMmwUkhw7gRZvna3CqAdwSK6FMa5D14dbgfR9Svz1XDpAYSpRaFvxg",
  "key17": "2js99i48JimDUfoM1NL7Yuv7TZKupgzV8qYjuJQkE5SeR3q1C91MvevwiaPbyaLtFBxfG77F3FfBGzynB9UausxY",
  "key18": "2gu25Bhm4RZvsTGRaRq7SCbscq3Tis3AhcvcE7VTBqAnmT4QhtQ5FHmgQV76YEEtNsoRKpDi8eGVzBkYQ25VgxpN",
  "key19": "4othUk45fvAsN66GhniAaTKiGArvaGLMfwrRn3UQpHHES6GKMxngANNGM4T3VssDcXaYKcFHksv6snpcYAHVWDms",
  "key20": "3zv4oemPy5RctSmunAxnaXQkxo9TcAZfQGgNF2yo91NWM8nVMe98YPNTTjKC1nUSDDHFJuoZmcgRC23NqGY9TNcr",
  "key21": "3bWDqVgB6tDSFJDqzK4ovxsVQFDKAwiMykVVKNZqMasDKnxxHui4msbJmuMsgqAHfXcGxZnXT5qRuE9A5nyVswQb",
  "key22": "5nSFiMvoJuTncKNCATrHthsjTZePkg3QbM3Dv1KvajMdHXpd8M7xvrsLARv8aU4SURCsYC8R4aVFccrTGB4yPJ5R",
  "key23": "559ymx4MFkz3auwEe9A3UPZNWxZX8ixLWk5pYZ8Lbu2TXFH4RXfKBfeJfz8ubqAgWmSCnNNFSPMAVgp3sDsAUhpY",
  "key24": "26ArdSuC4hDUjBZUcgZEuGxX4AzCvKwjBBuYsyGKzbALm3jDcZ3bnBege3PudZ26z6Zd33jxprekZ4NTTLqPZKxa",
  "key25": "4d6SoiM5K73Gfy9yfKpSEQfCgBKV1m5Vp2mZjXtMMNDw6Y2qkGQ3EsEV2u39CmES64mf35MamokBUQaMJmm52xeY",
  "key26": "3viLuyydM1fwXbkA64cQreemSYVnG8GRv61LTsw9TCe8jQ5482e7CpW24uVuyfWKiXJ32SAjDMnSDEYgy3HVGnCM",
  "key27": "3qkqawaKAi39Tau7hxvWZoQcgBVw3ypvcmRj1WELZDMDqiuemYAsLr2Tzqyy7HcsMXKYfow25ThjVWq8dFdRVeAh",
  "key28": "39N4yZa9KXBtRucnnAmuNtPTqQF7EPMk5Z952AbyLBAYpoXFWZA7m49CCVeMs1dfSDf5GFzZcWWSq8yqWFfJQKnc"
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
