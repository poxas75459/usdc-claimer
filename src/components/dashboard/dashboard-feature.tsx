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
    "Po7vLrNGai3pDfApbbxr4Q2dYqNtgfpWqu8JLrp1dY5YcVWaVQLNtD9pbHepeb7uznu8ptK4ZUCDGwwoBueWbak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PiVsCFreq4Ye8wWyYEwaTWHuhEW14yBS9cPcq1sebLNg5AimXPp3EsiFe2fpBY7eE42aBYWmQv4G8MUGasStyxG",
  "key1": "3AbJk7a5S2WXKdLUUXkfHzbFcGpH4MhtEbM2Fgot58XqrrRmfkkPiAC4yuAuGmhgcdWrMiZoo6JAR12eZg2DrTkr",
  "key2": "4nnjoPPssoj5S5QX46FkqLjbhWKZipvyNdGtz8DrQvppxgkh1bkfCEcYsjKTWVBAx7KuiGuhRZjvQxTFrmvaoPeF",
  "key3": "4Kxettc3b7gmkizhbkh5LbM3aHLqSBR4ZpzYwPGV6ZEidT1v6XXwU5b8NQxhkWok2V3APwk7KtYUS9K4qGgRJcCL",
  "key4": "5RoghdxMfUpETPY9NjGD6Fwux4XiYSYFWv2q7ASQ2HroCH4DhFAJKUEAtNevoaBGYSikPHBJCdKrcqntDpbZTo8x",
  "key5": "3Q2gxkdmFry2eSt2wUX7x2Bzy2C1aYfDoAXTu6jgheGcMeGPSJUhAt5cRUMBBZwW2DGryxdiGw7u4W9iVkbxPckB",
  "key6": "36gFMYnKBMQCMmDevUtEWLssrb2S5yjTUhwCEwGu4qCWKaoDGwctZCaM2hWKQr4tnqPXZZUd8QEQQAaGNZHdAoin",
  "key7": "5u1mnybZ2Y4H2Swdi5AJ3uDGehYuC2pk4oZ2HfeH7zc48mvy3GTBsjbkGu4tpNfssbad3M2ubctqABmxyriXQ7xJ",
  "key8": "5tGG7BTjzxHTxae9PgHLRyhN3cvGST9TmfvT1y6VdburqNWcFR6upxvZfHKzykVHWViDE2DzoQMvVPznQjqhrB9w",
  "key9": "yvMc3pHEYgmSYcLZhpTYjyHGCUikZsG1pXBSH9W4xz5ccHKA6x1bb1VZ5BrRY49yBbuo4NfZEaiHJEsLEoqBYVY",
  "key10": "4kssQrywv6XUpErTV4thBi6pVgr4eNNEfNjdsp1Ds8bc6N3tqKNdwSfP4uy6vaSKDmZnoqxo72fAi4E8XmYrsk2b",
  "key11": "2mRZk3n1eNo2KLnMphp69sGo6h7acmx5fMGLLoTHwYcmREG9PAqvpAXtMm5WbWJnisaqoQVRfSDoEpSHECFYBooe",
  "key12": "5EV1VDbLRrWMAtkKzo1ps2cNZoz1q9mdVzw5dZfpMiyrHQUGvGvUmiUReFwheECTdizYa5eC82fuXYcqAJKEcxeF",
  "key13": "2BhaPyf1om3PAH88iSVLdx8m7aA3tDG4HjVLc7CrxiW3VMwX3ZDtp4ds5UizgWhNMGnYoqQACizJy8VWmuKkhpEM",
  "key14": "66rUoKkw16LjEx3fXCxBFnWiThwmcKk2nGq1AXuvsWod9tJfLFeDjHfrs77M8Lv6taxFTruZLU489VJD1Awdb1Li",
  "key15": "xn1aAUTxaX6E2iBPQh5DDbNfgcxjnRxaJ4mc3bDydwTdP4Zx88nFk6kQDWXGXzX7kje1WeyukAT3Ngx9VqoDLCh",
  "key16": "24QjPLp3MCafkUvd1ZR3vuqDEwBbbVyZSGVFNv7SXT6bRACTXqmzYPFEvHqQgnc1UK3ruzWrJQ5jSLvDVcVaTDAC",
  "key17": "4RNUueAfYdvJt2BDrJdRYLxsqFfGcJPAMpTYyf2dT69kbS5f7XUaW4Ve4H3BrRfr12wL11MeS72GCdGqAqLWZGLz",
  "key18": "5JRqSE2Z5rPZvBud4spMdxc8gMHU7PfvtD1R7q9oLW9XhpPNaiN9gSmyVFeBUePT2W6tPAQ8BkS52N5QobH5qV4y",
  "key19": "2n72weNs6NLp4RZ55Gw3gAjDXJZV3k4UqjqtYwT8attyK6Y3WYmXowPc6Mh6As4LfrcWcYtX1P9GiXBB3b6z22xe",
  "key20": "owRtbDxhywhYEcUq3GxC5fUJXBaz42ry3C9NhcCc9Dgv2a7V2tZaGhKutLFSFyVu9PpYeFGNj2QaThpg7Jix1mn",
  "key21": "C4TKVCT5GfxNaRQbaRiFka7CWzvW7hoLuLFcVPuLKMzCrM3R8T1JAwGUTqqK7N1qzAgPFFprXQjK4s6bxofHDGC",
  "key22": "3uBKU1Uvko9ngQte4cpF5wfjarrhK1hzMHbBT8UaeS5WKqDodBTgKPjQRHR2seYtSQEzmCs4a2RGssrhx4j8WkVD",
  "key23": "2MLju2MbFnFGkw8htL8jqDjn69KwQv5cELiPzek2nYKRT4LNTRHhcCnesymWhpmnN3ZF92deHRBVHXj3StjgNXaL",
  "key24": "3frHHHcq6TCwGF5uqyxYnTRUmKi1RZGpbsNcstPTwWiwLJFaDQwhqanGeCow2rsGAd5Pm3ocFAoezrxL4fyNvYqr",
  "key25": "4GdqkoV6zpeWNgrdYyYfM9Vr1SYQJx1hbejmuP9X2X95VXS59Jzk7FtJhWdrJH8ttiz5nb31MYqDFAuW1kdkcNq1",
  "key26": "4AcFbzMsL4xSfadBNboe4DiK8mvYxJLygHZVUkCCYLRPihqoYug9764CgHxYbP7fRGVMqXtPUeQUv6qDHZjiAiGX",
  "key27": "5J5HYJxsyUX3fJTbLHgVFZJSXLP6LGnZrXojX1Ye3fYM2o7ST3uY16Wf1AcMzxEKGkU2DX5VN5cvskR8AvBr6rEQ",
  "key28": "2y5HwQWeNC35kXggNaLHJjF3wYdBDzUb6hQYgJseLyUSPjBUQ6wNhU621edAT7RjBYw112dCC13eVrTpKjeTXeHb",
  "key29": "fFxmD5WjctKn5xTvVSFjPRpsajnFeki7TJbVXioQmWdegfT6XuK9AM7mAqhgopVKqyKhat8abSUFA9KdgxCSpPg",
  "key30": "2gM6hACN44NJnsSCJt8KW5odakHy6ghAq3VDBZHErKhtkZ7WFsGWockiZuFrD5pnTdXDp8Q37mukaM2pxeT7JMEP",
  "key31": "3bZbjWtFHo1Sf4XvwSn4ugs2nsTdQs27ra4SDGZH4Pe4nrNs4NGGNyHRpAEJjXXqCVbPeXXhecSYv4s28a3FhWqd",
  "key32": "noEkEfsPr7pqstUV1dhDe8GkgeYskSusmajndydA7mdiQHxfBSz7SgWsKmsNFRP9sVoBdbjGwD6mgfRUqA2RsEB",
  "key33": "5Xj2CB3mj83R3QUDmUPsSoEeTvzDEfgNEAp4QGwTAwEpzAjs9W8dwsRZMmj2L1d6ugwG573e67xuvNL1CoS52Y5",
  "key34": "5fWFc1uZHfeDMk3wTrDV1R8aMQPF88rgmbbTKzZWbC7HDWHjB8qv1LJMie3qjLZEEP2hfBNbTgBYqiaMcQM17Zoj",
  "key35": "2FKxPzS3WCqcA44b2twC6UaKBxRavkhWGkwrjeVBFmATU89psZXWnjifhkMkFhRoub71R2Nyk8JD6Yjpdko3eD4A",
  "key36": "4CipFa9Uwhq5ySermcdpaV6rJEFULFJzS9gVG66eZ2h35oKEaymPj2esfs7t5pHXBMVq4BV3ruFF76JBXzHEnz9Y",
  "key37": "24RyTZ5yZwmturHwUP7JxRSeHYtwqfe8kiXdQkhjUd9y8QQRZMaf81qzQXTQab9GYjv7eK124UFA7bAbESwV79PA",
  "key38": "59xdqFb3ZXb7FmokEV3aiJBpANXqcSgED9Me5MCJmjxVe6mwvnPzdjpGKAEE8BVhBqFfgUcejLDGXJxZfvozhR36",
  "key39": "4VHwanVijhgELehuULxcuComSU7HCJTPfTnrS91Mr2k59e61iSTXBVnDCmonxNRsjobMJzas4xkkwk6fTe1KyoCD",
  "key40": "65TZSVGMmDXF9tL3EvzdNB9WWDboTGdsSXpAhFoKn4BeKKUWcSj7Ro8GQV7vvoyVqJpRjvjhrhNbLXSnEJohzBaA",
  "key41": "3BjfPJA2qn7GFrxGH7fSDNyD6cWPoT8svPJt1b7LtALd9uxy2HfQ83fE5cfiB8yNxq1Hx3rg6ByJyD8mQCRBHv1m",
  "key42": "47cn2Xt8nGqjdNdZAC17wnVu3DKDeWsyssaLqHmrtmNP4zBqaKUFpwZyyVHbSV4ePZKzL5r2X7Q6ryq6kEQ2tpFj",
  "key43": "CX26vtAjKd9vLd4c5AqqSPSs6ci2DoJEDMhmuHc7PuHanmEn7PTRB2iEFdqDTz4mgH9Bkp3E66umL5U4JaMbq1D"
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
