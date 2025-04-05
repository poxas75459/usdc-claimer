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
    "26NC71n45zj84tn2aipS75jsofru5UnWzTy6vgtSiYYNGteskgkqXs1TCQj7VH3wkKagoEVQPWxn31xu4wvjST7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRn1sLQhw423UFaxNA4Jc8XVLj4y9NCJBUQ1sUwXGKBAHiPNerpBQnM2Erg8fY14oKwgQvxGkKndXWYT67CZJTQ",
  "key1": "51rduiLyzH7NzThAURUhb4b8paUXrmM9i8xcejwQcswHeiBpZcJG1a3uKG4GRZYT8Rw5bM3q9fSfEanfxVjbt2c6",
  "key2": "2aMr56wbPZRmqnQphBgLD7BubQ8dbyaHPeoE6syR91gZVottyQFNeZsCezYFGuLWzD7USdsvBXqwA4qSBqzUUtBs",
  "key3": "4x3BEsV6jE2ob82V6zd1ivvrYsndQiA94ipLrsuGCkN3qCYgm3eYEhEwQb8FWHMmm253kmMSaChPM9H2pHLMozsq",
  "key4": "ePtxK23uYqp7yNbdrgcZKQVdXytgtzwgvjT7MkAeMtXPtKacskQuqi7qypwHtsYByezi62NPGi2ZqmHAvRcoPkU",
  "key5": "35QE1ANMB9o9c7WJJd9HpL9mDTJvdjAH3E6EiSg7PK5eHd29MEEbDnrCsJpMPtHYobPnLkfTkSH1MeHYqejEjQns",
  "key6": "79XDmLE3u8egjhXGkTaVe58ZrrSSpbeu6xqsrg7Khu4e8frPjyWYFP316avSg5B48Z8AncNqcM2DU6k6LMoUvNt",
  "key7": "3egWKEK4eWPa9KbjAmrFc3Jb4ctcAowSKNqpTRsx33iPnDY36MMYakN6ZRB2mSFgmprshoZcp52F1StfwTG4QuXp",
  "key8": "2VWURmYUakGnqPpXJMs2QWzPWPtecyL2zQZT6FcXLeFVrc36QMp5tSjRGeXWpBiEwCGDZfi6PbxCNkoonT6h8gBC",
  "key9": "3yLcAgTeXGMzG2Zq2psCXjKJRJK4NFe2jstxB4ufxYTwuu2UyeTvfxkqyaci3TSimyf4FBCbHXt1Gxuor6aFBs6k",
  "key10": "2ePKpuqai4EsGVXRDqRrpgtWjWdpyUkCwNDqHLMGttthBSDivM9LWj4MR5opC45y2Po4katJG9oguG2BKRmcHJ9a",
  "key11": "5TGtk29yDgXGEfVS5g8nEGa53ekSSwd1debyHrQrXVEZDMjr9FgrARQzGsXih88t5ffhhS4vR9hmJAu834L5NtLZ",
  "key12": "2NfNAiwg5yWkaWxZaHspuWeNxYV15fhmefcrwkiLUjFjPtdxpLpcnvfvrSyPdZc6ydJjDfo6wym4EM8XrNJks7wp",
  "key13": "4cuq1CJH4XuuUmSjUjUAF6RPf2Ewc9AjZ9y4fiiZW8Rv5u8PGEnXKA5B384iSBB8qgTtQHSUq2qr8SbTmdgSeaFL",
  "key14": "2mhRRdcPnSfB44zh7C9RSUXJg3B9Ms3WVUUnA8Bc7N87AsM6kds9A5JQpBzLfugRaSzXZ5ie8s5PrCA7HBkEFCt1",
  "key15": "2wD73UDw4WKZoB15jbSgRRUHwYpmMBJnhfvxCaBWAmd981D8kAr1TaiwVQZCMytTGJ86b2u6PvCj38Ba1NqpkyNo",
  "key16": "o4rXVji2J353N9khH4BM9tZgZ9hUsPceMPdtjyNx35SMhXL1ck9HMDUdWcSdiCrXzafmM3mHGUeXRBgape41vU6",
  "key17": "3SHeLjPTiEPZU7ik41rrAGqaLrinPtjNh2c7Ma7DjBichRrB5VDKGD1hDu5VUat81bTEvZ9pfGABMvPxWNZrtYH2",
  "key18": "33uN945dHoAnzAqC5sc6WMDQypBa3wa9CptuHrhpNVkQYKsNMkqCC9SNfPXS1mLH4d7ojS58BRm5fsg7DCjLqxPv",
  "key19": "2uJJuUDjtkdVfvx9LpxqRmr89q4c7e1SaaQeimyUrQRBJorJNZJgByPQBDwxajaFWtPcznbLQoSbL3ZrhWGVT5Cw",
  "key20": "sgbJNT6zJZBTyAV5B3ZrXvCEBmyLe9L1QQwYmSYvBTkNiwWtcZtSscVk387uuYgqGx5ASZ9YpYYmNsn3D1dYyUn",
  "key21": "2CEVc99ufXbUhcMhbf4qqpYw9eQLwH5LgFtbVvuGApjxqM8JJ2PEtix4GmvuF8ePQkTi5AbvRjzZ3p1crwSGhMs7",
  "key22": "2vKwdZq4rk8UzLnvZ2ZSScvvTF3X14Z8JCV5ZixdHzJmZDXTi2wd6nTihXP5AXCN4khjw5oJ4K8XRCXxfSaiBXYr",
  "key23": "3jDk8J28ZLDtShcF65wLxFeSjroTy7uLdTXpyB1vJvF4tYVAW4GcjwBCVB8VqxRSZtygp6M2THwJjRy3Wmr8farM",
  "key24": "2oU4FHNbGxnAx8Zs4saTWcSM7dLQULdzJTNpMJvSH7bJ2TnEX2PEb3xMGamL1dJr3ZPiQq8AK6hnBZJP5fFt81uY",
  "key25": "2uijNMw9vf3C5MhELH3jvfhCpkf3ojGPaerpy1EKWSNvufqHpjZj7tHauMY71gWL6WfrRuNJsDQ3GLqaCCfmGH4o",
  "key26": "5WMV2YFGPu6LSLC3s8vAtEeaEQdCtS7ZgkAsAaTY4cYKVbaXgJK4eXzSZ1j31AoAzoD8SBBCpt7NPeYXNh5nCzJF",
  "key27": "5CxhmKDZiSxiBMFF4JWSRz4AyRehgq1LvdeCBkZ1LXXgu7vEvkePU8tGpN9AoWXQFvRQYYr2ZrvXY55f54p2VdVx",
  "key28": "5jRgf33kQsDiDoUpaBjfj5KRsX34zpFx6Qp8xPHP7fffpaUnqee4GM2i93ShXSaHisv6C9Cg5GaH1GHf1PzVyiUs",
  "key29": "3PZinNE2g7xnCJhYNaojv6HVRXSRtjyh7CsM89HWUaehgjsJoqAcBaXogdbuWQ7BU7TJfTrBMVW4s7xkGBzwEdBN",
  "key30": "5xjwLjtL8T8nAhmi1fmytPZaCGBg1XSRyd9vS1KbL7a4hY2z2EMUXqGZViWtYdytcFYe5E26e4S6Df9YzHDn2pGe",
  "key31": "5zm5rE3mHAvvQzyMP63FcdzVzP4SuC26k4nLMAqhA6p9T96HTHA145SMTKQ3rjAwW6n3aY9LhnsnM3xTyzKqbYaP",
  "key32": "5kLD6VwD8QC6XWRniPzGkLuLedVWH7YF1GJh8KVU7EaoEGZUzEjM7sX1b594T8eVRMhkVPoV3qu8BQRHdEabzDv7",
  "key33": "39oD6FLcSfsGL9EmaAvqfPt19PvXDc7GFRq1Mmf5z3eDK6DRPF1qZmD8M7wj5nVrRo3mknzfQabq1SiZbsm3DmrH",
  "key34": "41wwUFdbW2A574iFeUC2AghawB998VHTiES8bqssWf7n51mmMPRgPGt6bHibSXER1mvzW5ohd4Q1gV23aPPyaWoU",
  "key35": "2ou5XNrJv12USQb648cYZ1mc3iAgfV5Z626qrb2g5Z3kpUrLh6gkPCesVjRZLiMwDqRXTgMjGKa1wApvNgKzrR3B",
  "key36": "2XFa1tvZmpbAemnvKTJ4cMcSFc7s3vn5w58x3FqzuRQFWZr7Ku1nwseAxPnPJqrW9K2SiEwfhPpCf3ypcoWGEVXf",
  "key37": "5FU8YeA95yDCYUMkJ7xMhc28GsqsTdxBJJuVJYpAUcK3tdet3bH9VNWSeMCTbnC4HMppSojSGoEkzFdUDau8RSSn",
  "key38": "28LBqWwfHAwHuq84oFXvrrNDgX31LVcC9QKZq5CHTyCYzWc6uvsfa6FD5uoWvi9jTpmbubU5ZnzuAY92FQkFYFCd",
  "key39": "4PnPBonUxnQrQBXLkpoLPLdxhqbKAWZw1EtBcrXRVsbowFTobJdkJGHe1h2LouUamKrTkYyTdtBMsnwMsJyxUuFy"
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
