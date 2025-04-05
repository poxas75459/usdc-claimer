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
    "41b8YnaMe6nYVgb1pDsZ8WRZmUgx1UT1jPNUQqJYyA3rf4chn4KwJGY1kXqxp1f1GZRPntqcL7bd6deZfdAxpUBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HNagsu3DVeu1YeiNsmbZN2mTW55ZvUAdkjoubQdMEaE12CR6VnaT8dNHwqLHnpSGDzbohmkhkPaLmT86NchaiXn",
  "key1": "43FouDejJ3Kz48X37YZWbRMH37z4gdvSFKPnAio9rEwvuA2cdq2KY9EWYeHsUA8MZK73DFL48C2avXDqL1wyr4UX",
  "key2": "56T9HqG1MafbnKHj2xYDf6qUMiTgRa1sqd8kg6HFBPD7MFzW5UbNkct52svQXUbHmvGC5BSbMBQ87dpT6cDgoGmS",
  "key3": "3r1YWDuQAxrEs7pA6LgjBhthHHfd3WkQnFLfF5yVfU79c18LC7D6qPdHd3kjDpDChnBn44m7c5MLzgDPA6hUT3Aw",
  "key4": "55YUc1qQAc69Z8o8cNr9xaiLbNT97Moz4VCoGAe9euWXAtGovnstKQ7h5EoxdNUaiLpaH9qpxAtiRQHuS6BY52mn",
  "key5": "3ntjZgR5rWNJV6XprRR9gamnwwC1dp9ddqpQdyGepq6Dq8Ek71eg4zmYKoYjyrkKafTb9AveQs4fTrnKoTBsrhcC",
  "key6": "4C1MtmxKWVNdgevFvDncy5RNtCWeNJ2fwq9c1oZwfJnBP65yTsZxxRWG1Nx8SWjeFyrtqQHojCFEs1NJZpLxHmi4",
  "key7": "uFqLTNAFHXap7FN7cQWE6hRirXD3HfMKg3McbXKaBUC1JfohsXFW7LbVKb7urhJTm9W6PTPetxLUsqAoMUvHvpp",
  "key8": "A84J2P2G1gGJyXpRtsoH3S9JYTjvebhRxt9mnqTuRrPSrvT3ETnqowVC1NidiPwz3DT6bEkoemvfhzFrgwzy83k",
  "key9": "4z1fswdXbypiLA4jjssRaADxrBSzy1qB56kC9TWmRnJgqiycTwAc8e22AiwQiZrLhv6MtWaV5WwNcZNFZZgMGsb1",
  "key10": "CqET5bUUF1PVz3REy6N2ApsvkF1DqbkFqUU894gc9Ss1fs1C9FKipYqAZE49HagF8brpZ1P4LhqDeACuontYeUY",
  "key11": "4mahPcf4ukgnZdFAGjcC6o3aJX34duYFDXNjpAwg3fkg1uSC1r29ToMu223aMiwDFqzqbiTytw4MbrM5iG9wub6t",
  "key12": "5WUh92uTk1FAc674Nzax23G6cNBhbDmDYnpwGH75KhN6Rgfi3Y3LhXsMETFVg5r3NYcnEioee2P5xW2yq4jzfgWh",
  "key13": "61hSFbQGQfpb5ioZLPsK3pJ97YpVGpPurj9K43LdimfAAZSUbsfdPZGaqKPFDeKBQ4qF1aUsgLNHgWCxMkUmXvND",
  "key14": "36VfuacbBfpHzy18fnhCQEWYWgWowkodim51Gk8M5K1VnFnRjpVcuMdidm5fqgAP3arQjgFu7Uk2qyDhKk4XX5mX",
  "key15": "QQrfpyTKpy6G6buM1i1fTkfkXJk3nsqxomfJLf9TZNLqvDnskXbEQa8Vro7eAa6F228LFL8Yk1g5dSfYZWpVAks",
  "key16": "3M7dbJuySgiFiveD4HSqgUditwfWVMMYceUEpbhJgJFQCydwSG1xt4vCfx9rKF1Cc58CdxW4QbguYNZkjcNfD738",
  "key17": "5FQrjRKcRsM6BdttPZyAhTKYLB8fDqqdDQB75LY1xAkuCuo8ZuRnG41mEWLAXwxkUVA29bbFZLZ278zUTGoZkRcC",
  "key18": "5kkvCAjo7BCPo42jbHrrHPzgcRgUwA3wm1Pxmaw7DpAnJDwtHnTjpSwRPEULVNqTUb4BceU6UF5V49DHUitoKnHN",
  "key19": "3BmFM9UCEjpUnkWedvm75E9RsPbPoioLApxiSPPzaEzgqhLKQcyULesqwp2cwGn4eRZ5rpMJ4zTwHPJo1NqvRgsE",
  "key20": "2dWxDt57i7pz73Hq5quSewud38HdScLZiyokQGE8J334BnNsbEFALX38hhfiCV3WPPnFpQNAFNhGaNb8sNwtGns1",
  "key21": "5GeRtmeFKSx9jtFTmVeeCNEcaBCVAnCvYS9tkkRCKds7MVFse2M5AveWrGSkiih7irK6MJndBDznPKdPXDuxfrbP",
  "key22": "2uXgZgfbvPJz5eBkvJhevZ27APhbb2y3rVKmuHoPbqdoh94Jpe5JE3ngTMxqPbXdtzS6WqNg6giDFKtnXXHyJCCH",
  "key23": "2Xj3JGYQ4M6Do6WQiWjuJczvBXaM9XMpzJJWR2FoG9hoc3qrTTMHSqo3gKvBW5qTyAYa9aruXP5FM76Ma8WGz1dj",
  "key24": "bGkbs1GCKzR6anuyr5AN5YgkHwTiY35vcvKbVigMFetHx44xcxaWkUAuXFmhZu8EkaVSdLwspFvAnNbYftnbmEv",
  "key25": "edD2c8Dexu2MNLsdSwB2YZokweLkFFnmeFJ4Jx6pmtDkc5fkFjRSK4WJSZEcsXuD23pbEc1EBnEkw7gLntVPwZu",
  "key26": "2BJTgE1ygz4zr7twnwFAyF42FVqppcJ81wY93onkcFax9pnH1gZoYNrYDxjC5W6ZQkqRTWegqS2Kxjy47nQipao9",
  "key27": "5YaT9Q5w3vxDygKbZK4NFVVGnF3AXUMnydoJq3GnkcMizFmEQTRytQC8cL5oAqPhkkBDvdF4Vc4LbCTM8KTH3PN8",
  "key28": "twarqU31ZBETqS7LTNtKR17uc7KAseGpEfbJoN59xeg4aVrQyQLffmYBmPoBeT1XG2Kyh3EDHpuBtUahVsNaZjk",
  "key29": "3dqTPmXYwXCqD1FnfLbqtj6mKaQutm5tB4nXUCS7koGMsUXq7eaPRqLJU4pCpw3S3sxTUanSAuHVsRAi8zhxyZNg",
  "key30": "3nEMeLzo3ECdLUHQEb6epQmTK9HSwgAbcZvtFD38YWJ9Db7kLyMR8zqcQFq1Mj9oJfVzmUaCUmB1aMHqwwRAoprE"
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
