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
    "41s7tiCpShPwdxV4iQUF3dGMmTVUZmy8aXjWc4P3jgazEFCicpWoZtXqjNeNfDqMB76qdQ7r51e3Y8GGCWQ8ssxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PafGme9UyyFuDJ4MaUMwPhTPZKLFwnpwMPZ3ctsHQ2TbBWwLNfSABgYJF6TEyDB5dWnMHG7iRyP8Cq5m8s3qHMu",
  "key1": "cdr5nmiv5XUpfdXP2Xf5XykNhyUHxyJTAyAKs3aox6GUZ9nwchTZHqcbhgriujaD46E56GtR8RjJRxrzgR3X2Gv",
  "key2": "5LjpTS57rDsMjsAAMTDD5MbGwKZq7phgQEzZR1duoew65rhEq3jtHkPq9qHVr18ePBsoWaYuGwXX2QHg6B9AdTh3",
  "key3": "2Vkf4J7rE4Zw3hY47ifDTPKBrgCJDjGEsxqJZrTYNKwVSSGpMvT2eVtAysw42LGJLc2uzWgxUw4SnuDFqD3sBvxg",
  "key4": "5s8Txm4fdTFfcXwfR1Gh2XfcpWi1cjkbMk5Z6H72NrnXda9jrq5d61uDdjFf4TUGdc4EuZZcgoBWBDAoHUHXkQeL",
  "key5": "m4Auf949EBHMUt9Tb5UJWMi3dpHCpiGipGHtYkErcKrTwFTfnQh7qfQGMCnjYPta3277KW2mroaThxt2TQ5vQiW",
  "key6": "4Zkvy5RAjP9vnRzD2jQWmMuTS2gynFyAbCNpqhegCzjAHUrvsotY9TQEfPMB7E6CfXEjYrNoR7wACRFsk7TpVFbK",
  "key7": "3jigH5XWfCK8YATiUeiq2BJ77Uxrp9FLkhbinJyMRVpWi5vyDCgDi2UhA5X7himmUrrjBc23M6JZmo8RYYe7zx4W",
  "key8": "JhzohLYhs8nSRKSsjgkbBi35Xkyhniy8Wx7aaKpqoUXLZWdVcDArtTqycK9EpPA8BbBfSpE4WYJdZhDkzcjHuBt",
  "key9": "4T4XdtrrYrjwVqQbCCVfe8keheryeWY23BnTfWwPnEV4rAC7vYgRPy6A2jK1jfukSMLCn285AtfPFZfHnqqQzBAs",
  "key10": "5sKYLS4csJDDvBsdV7E687qbpDE67yPvD4UEegEtB1SrSrrWL2qQ2ZTmZp7mX7vjKwAe3WgN27sjwCDGFdDw7rHe",
  "key11": "ymVSa4G9UEthvirAMMYGL11fTgQ7ZBeFUn79SgYbXVEZDFFwUDcmKXHR7M1YkNMCH9bGSWPpxhADtKF69v6EtkV",
  "key12": "w55bGyo5mwQAc2CPHBM9ruJnjhqhicu82Wet9w8eiRj6pYw78L1y82RYdEud7Yan9vvwZJTC2yQW28s7wtpvdSR",
  "key13": "dbDMN87brkXA3uHyS7kjkNRwUeCtVDyCr5JMbq7FteDTt3EFopBiQ5h6DSkWeqTAPRwwD69xD5Q8a4fvik5Lyvi",
  "key14": "49mSCQihHhz6Rdvj5RfmkbvzxMPG3Tijfjhfgxw77mR9UvAHa39peXhhEz7qLEPcdLmGrbaxXgLxejvQ3KyqmHEV",
  "key15": "4gEBuADwgxXD92Uk57NDrqbcn2ym2Jkn8ARpKoiHNgNWxaBR5HGDFpa3fMyMLEkFoxWXuAF1riLTpUCewqqaVeVb",
  "key16": "4DTjRkX79rzthhK3vYmwNkHdzLUucrokS5iACCMKqWwwJxwdvfpp1dWcyjrNkHAEHqk8uBa5V1fU2ETnBfN6DhEm",
  "key17": "3t4yjbm3RtUB75Kjw8czJNb1R8uAhH1dM8XRaSCrt8h8KpXHJEBUKhcjDT46MqzY8iV2to96VzPi6jvyABEWUPtc",
  "key18": "3U6aRofbndG9kkfAGfCnrhErSUrfLtQ2SewRhsw1txrgUothe7g574o29PdHYrr2i3WLZ11hGPcd5gg6q3H2eezi",
  "key19": "4tHaPyENKiTnHwH6JM8xpDXVoTp8GACDhCvUrVtyPrarh689TVUnrMotPSYjfZsQrp6oKbi3oQrGJJ4toxRCRPns",
  "key20": "48ro4NDg3GAuhGBmpX4ybhsRtxtCiVTPogwZ5Ad1K5PjWV4kwEaYEkFopgzMrn73bL6RdURf5HXoLaHHYLxekuXN",
  "key21": "4ePJi6qNZFXRqSGGqKHMkGepTiEkJtcjGjCHtPFwz4PuXYL5pN63gf7HR1qiNLFYYQcWh4XnA73rfAPT3FoUNgBd",
  "key22": "5TWqAMo9n6ubymd5qVGdGytmzuXf3qK9KSjANzHKqQudCnd5p3oggK5J11yGdfbn7VQ8G3Di5HMxiPi3rGpxN3MH",
  "key23": "5yNSF9r1BFkoY4szpfXda9Q5jntxcUGoY99km9YyZM6YiFHYU1S5sm36PkKN7RiqUBqJR3utLBuHVc6nEMaTEVpi",
  "key24": "2pJNg2ecV6KCHfDXGzmnVtwMWJW3JhhZqdfv3ERbeTVHF8zZpe9EUxLkc5iLjeHnZdRoLZoBcA7ZfzYJPyVk3bar"
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
