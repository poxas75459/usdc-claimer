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
    "5ygNUxdcNygFKNNgFzowSiQLEnP2yJBwbM3qxdAFopWTq7w4PNnhwh7Wcv3JpxjDEwgP8ETVGSu9WME7abXyeBms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQBeGjyH4ay65QsdKuK8vLgLx8HAULZjWsSzGywFJYHpUwombjgiQRMw8o8ox7vKBsNoWu1Pm1DZ1pYGWQkdCf1",
  "key1": "4Vx8MKZRKAjqVpgjwSvdWwpcMwFYcfboimNQJ1mGEehNaPwFAoSUCysLPuknjCrhuFygikR5NLjAUsiW9SAWGfbD",
  "key2": "6XnYTfz2o7RMpYU33Xqm4ezWRCHhnW7fxQMGHdSo3RfPUPRMQ3ry49uVMHgf8V8MzXh6mcCTGKbLfESMJNE5JRd",
  "key3": "4fqBRjKmTQfcta2YN1seikMuBEQTYptXSgpZnjPmkZZ18NPu7mNQSu9yVRWP9YZhiRWqkYcAtTWi6QL4e4pZaEiw",
  "key4": "37DTbMA9kRP12WURtz51rEuzAz8KtKMdzk6yP25jKKvu6cNmGvuif3YrHYft5g5XJxvqfN1k5YFP2YwNnHtnJ6yV",
  "key5": "3A5P5uHzzAU8RPj2dq43cdCvuMbJHkAR4i3ULJdbgvVvhKNJA8Sq6TmE9MxuEspfgT3i5hzH1GxnkoGoEbNSpxBG",
  "key6": "2dpJuKRvZqobHcuoqswXYxqsj4aLL9UkoJ6792gd5G1S2gp1KHMtnKuHdiDkeQNeBpu7oAXYT2t85mqmZup8uFsc",
  "key7": "3WAvp7fydu2sv24MYYJHtdn7L3L1g8MteY4jBQoovsk1ZpwUYmGfjieUuzck9p83z4s9syjpq56HToh5UbC5txwi",
  "key8": "3oCmC9Z1hmR7oUc5VtPF2W2TM4SoLi2LCpxWzcmJuB4sxP3smSAZU7RD2BPxZyvKTibZjD7vXNY7kJDuFgJNuSbg",
  "key9": "58PYKC1mWoqumxRMSphwxtRzBZ9oAGdHxJ8fRuPqboBx9FFpprRoHVXYWrbhaNSJmsgN23pBQ8kgVSjK5oviyp5E",
  "key10": "2xryKFeHoWgfrjWTX3a4WsdtvpFUZQyLApovmRdSYq6Nf4sw5S53yLCV6FZjtq147ynt7nGdxKWe6X1N2sRqVezj",
  "key11": "4mnMUoaJLcAhxmUoXQG4JzQfHnHNKeyUDhV3dPSSPgCJQfFxeXBHpo5GSsUEyKmtKkkPRPsoJ2hDMyHXofN7Va7z",
  "key12": "4zRDY1yAjadZCnTatfSwdKvcM5CPsCZBx5xNvinj382cifRuALx62h6ubh2ofWobWPYKwuCiGE4Cnvin4J63WYmh",
  "key13": "3nfRaAAetmiWBRcgXFiQPxNvfmYUP8Y6zmNkDusMyTRbg8x64qJWCZG9gG7QZrqdt5HeAeoZ8HxZQbCdmab6nQW9",
  "key14": "hn5TKeZXtgfpynYLAV6Q1E3gRQHF57hgMQCuEq66tWD8qM9YKvMLT3caAJSHL7XhpqeZFFfV2srL9Hveuuqityt",
  "key15": "2mZcz7FrC4oEvzT88kQb6VXHDChA1pP3rbvXkEDM8CiGwuoaQQeMUt46d8CrNiZfnR5GKM2CXd8ymVXzx369CCs9",
  "key16": "j1t1gG59TDNQJLFrjVFaAL4gxExNkmq8BDsppV9iZyK2SFakrFkecqLCp4YCSXrK8yvYNEfuBpDVdHDEDyrybK2",
  "key17": "5mZEjko4MKhaAp3bCno72ywPGJgTBYm86Mfbvy6yCJYrQg5cAj5A4VoL2UPEE4QEWVB6VQcsNxF2AemmnPACYHFg",
  "key18": "4SHf4RDspwfcarZFscDHvrhzAoSy69FGYpXoo1CEb4dJKSrrRyGZ9Qxy4P7k1PUxx4agbxck2umMwCgasA8KzVFB",
  "key19": "3n53NqMxJML24KPHaYiEEjcMcBpHr54K3f5SUrDGyJmycuijSKsNtoVFjDoNg1asMmwb4RmdUZ6ABhuGPJa3TsrA",
  "key20": "2zj32ZAwwZiVj252aGVXso81RBX3xrBFCJFeEETzykAUEtn1uEDaXKhPJ1DbwPdeRMGRcBQMPUnLx4Ac8i5hFxep",
  "key21": "5subPaUZsdGMZHygGW4fKGvtEygwrJ5pvmnqvwR3yGoxWVNdDtPNqHwaGhoD9zh7gdZc7XBhENp3NxFNi5CdJNAg",
  "key22": "2qNHupPx5LNbKCk8h551yQhuwTJNyQAPGHrymuDM7pj58FrwikBCGgUcVvJzHcY7ZvhYNgXZ529Kqf1y9p9Y6TJy",
  "key23": "5BicKS2wKQk1n1sJ3PfvNXiNChjpKHq6x3RFLXLiK8vDY2YC2HHrCZpwBqtwULMXwvuru3qRurnu9Ctzos3i3gMw",
  "key24": "r6vvnFvsC2TqkX37Cig4gBETckvBuXZ5pPGGJJ1JXXKdErpLCm8DNfKprUyfQgAtzCddsEnzWLs7phbDLFJb4Ec",
  "key25": "466kUPchKforHQora7NV6KnhSzRNQXKBe2nxMQERC28MvrzqQuo8HZN4xFfqkosf4QpRcSur3bpqZc6Ar2ENv5Ue",
  "key26": "eikPinvci1Hd6SoVgWGS7rdpSgqAk84XpcfBDxNjd6Eqk3U5swZAjpG4uDLx56R6vtdqAwHQhVVViR7yr5P7fPU",
  "key27": "5VrWsJ6DFuP4xPAWBwwkrxx3u8LmCqjmV4f1uY8YZDxZKbxWzPGwmB16RDVeq2QuYAksJ5w5WaY38kfBDYUZSHr6",
  "key28": "5mKYPHAMj14bErGghar9cmzmGfkZPbUT2woPefm2Sy4cG851CJfdZU94FrTgyEDvFP5pb4oJw6MwXWzyxXKzYGDD",
  "key29": "4cyxdRovGsx4tVJxgXhDpqXajL74GhRfScdzcsuGajFJsTKpirry9DNk85KDbkWekys8naa6wiCwDpeB9UKR6p5E",
  "key30": "3YE15zGEnzRAjWiEdYVkXpjS7Sdq39SbuwoAxQfrWQTHXD5LH7JpPVoo9KEGbi64H3BkJzs6w6NR6mhwsJnKjSKX",
  "key31": "4L7QGiQrH11YLs86GrfuM9JyZozpYHLeukWMEc9fuUsJ3pxfhgFmfVAZdpEgQm1ZDwwC7p8SnyGMQv98q5f3bEtX",
  "key32": "ooGTuoD3VV5N9NDS8hsciAqYPi9y1Us98YbhUjrqYtPogtVp2vErh3S8aXMNBNQntxgcndzAKpPbongvzuNTMV8",
  "key33": "BhR47gzs2sdcZJy3hZNDJTJ865K6kv2TJM2b9BP5BnygrFvVmjHfRguWy2HShYLotSrgLsAAmAKrdBQohpAukYQ"
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
