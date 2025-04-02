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
    "5F6DeMrbbJM3jhfWbGVk6fpGkxEUt6whKhvY5SdbyCBSSewy7cXKfcumGzH8F2ss6VYPsmtwfAt7RnjfUpLNJKmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HwLSDLXH6iZDySHBp6pr9czBHTnwd4enDadEBZTggKkHWKt22ss2Y5Rt9RDLTk5JGrE81N6f5PgRTYtVfMiHZUy",
  "key1": "3r3odQBuE4B2TaVXDAFgEqZqmPUuEypa9qFRh7Aw7KjSxxfxmzWPimhcJJoLS8q6a6byTeH7dTxfJAqLhJN7Xnzh",
  "key2": "5piNGiECqisSxQ31kwVYkMHTQwqZiSG7xCwz7Jr2GjWF5t7iGFWDJWb2puf72jE1xyRhothCeX6CHzu6hY1rcRLs",
  "key3": "2pPA2nabMgmm4Qa4ZT7TniK3YDKT83i5jQZ4DwMjJLK4ZeZfCtPyJkwPDyEtGP8GqJCzZATc5kR5RV6rextRjQr7",
  "key4": "J4EJuXnsBP3xqHZfjnfUmoNU2AVwCLuwoKMnKZu1ktFCV6D7WyPrqtUytkx1LXJ9tgvijiHvQZHp2faUdxA5d2T",
  "key5": "224KF75gwsZ8B6sLLsSC4gJbJKqGwgWeKkccm9QKv2n75wxBACPgmNR7L9zpxRg2GCss6tmxkVut976J4nHcW7iK",
  "key6": "E4y938hfVH787R6hExb2R4FWMwJRys1oL8sjQiK2CmKMGJiNeFk185hufiuJo2sjmJUZtDkPDiokaz2GKVZxWfp",
  "key7": "nNychpH9mbUWcTaPcJLpS74HbH8pq3wnJTj84QwEX4iBRvSPPEgVpZwdQyaNeLRV1dBUiAN2dHSVgAKzUnuWodX",
  "key8": "3nb3yz7Q83S4X3GiwQyJZ7DRkw1pSDSWGKT3J1YQEWZYaXKgFjwciwnhM7yNJKXqqC4d1yEDLXcVfbYzzWV9nq46",
  "key9": "4f9zJxwHF4ttCNgyKcefn7WzAfJqasasta9Tis5sYSqmbryNTGi4StFGQ7gnG26L8yyzqkT4zHXZCf3pjYC7zSSN",
  "key10": "29WKBHfFt76PKD2PN8pKw2snN2vSXkceFshFgLFUMhaMHtf5Y4mGLRn5LoqEzvA8eaipdo5kxHqrJWNsUmumesWf",
  "key11": "2FiQEL4hFPQUDY88PP2byrmzGiLcZjy6KjMRPajpLuyHym1TzMYN5jXTBgXCdVj6rVKrnfcGkwystCS2xLdcEF6y",
  "key12": "3W6iqwBgz2Th7PRf29YEYhKd4q1KDK3Wdv6rM9Z9HqVdWYkCHwZGZu8CkwVZBGGggFFrv8tA56Yw1KCDNJDEgRV6",
  "key13": "4CYR1JNNaEP4DTdUN2it8e9Fm5W5D6VmQfFgVpV8Cu7TvwZoGoh1PRGDtBsJvPThDNeDNxvYbMSRg6eLro97PAGF",
  "key14": "QBLqky7eTMVy8p3jftUCgqZe9XqvsPitdhjppHpKQedS7sc551N9ASd2Dmi5Rj4vZT4DWaUtWZAbszpcxxc6N5Y",
  "key15": "35H5dk4rWeUsnAJrPhNHvGQcqFovxsh4pnZZJ8RAAp2kVZkZWhNiriVBxSi68RGUcSPDhyKUvn9RLWW8nibbbxjw",
  "key16": "4Eixfk7yGLEA341cz17yK3Cfpmswz7rGakDqYuNPBDG9DT7C7ve3k51nkvvUFnKjyr1P9KB57PhF35pZtyesqeP1",
  "key17": "4n3SiT5gCLQzhmhe4KysrtZgBV2662JjJ3TVyC3D3MC6dT1UtV2AHaTpsy5ZCVnrgzehWzShE8qeBxLmB4JNxmPK",
  "key18": "5Ci7qSnbJvK2DRSgcRYVj9SJdakDmAtpCyhSZ1TAZK57muJDoLAg3Zkx8A4amLvwYoT8V819miXaD7sXicH1f961",
  "key19": "4JWSjqmzw6duW3bKCPoemdAnizqJVtKQRUJAYPc3VTr9qHD9DG7cLAuYw1eSGHYNYzXp3YvcX76ppvfxyVwS3rv9",
  "key20": "3CJck2Ja8xGn3DDEK9LVrxHt9A7bHucq811pNZpnxba1xNakERv8rTc2A5e1v99dt2p9AdWu2AuSzEiTbk2iHC5R",
  "key21": "4CogpbEeFB47HaftMhDpX6rDiHfTEugW2YC5xZTRPL2MZrNXzATqk5XJNjTPiowdnkL9PQz6s13zVReAddWewDR2",
  "key22": "59uKKkZhUbya2PyRaPrCw96sUZPyjNGQFgKc6RS5GcsqaLVTvxKABwwWvVeJcwxdiS52p6gEMW8dHtWWHCNUehyv",
  "key23": "u2hmfhuoJQSAjCPHKkwfmMXhFNdq4uYMLaLGTbwAAAV74p1UwGrocAipSCvBChfQnK2zZQDwTuvrxj7fPmCtt3X",
  "key24": "2fJvCBjV74nCgvVBC2mHhCc1vAJG6r5dBDxEBED8AnjkhggUayYtocfPKkfar2GYgCyr7CqVdH5HybwEzYyEm5jS",
  "key25": "4EpDCpjiXrYodKSQfKSCA8xFeipwtDwBoeNVzamBCaPebZyh9m2ehiisQqDpHgCeVmbSRZnvN1AZ8EeRUA84mR3m",
  "key26": "4VQAxHT2xpqUanzRbYt5fzx39wBPHzqQ5G2Fw8jTHdf6VjP2xJPqW58p5TQQ2VPBNEDPsoeYKP5aJYgbYtGPszwf"
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
