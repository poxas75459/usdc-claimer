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
    "tBxz3bWxnQjSdbacT8nd5rpW3d1zcQaBPPKahjtXaE42ojXsZHh3kNsyuu5xV1YN9ZeGdcRH4jQWUmp7g4acMJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYyzCHFfDjyuTpp89Z2UX3shZufPcpPAbjXDGkRv1mHy2qakb6ogBsUS5CXzznY4kiCFZbtbNqaetrg8iQH4A59",
  "key1": "37gaxdH7hbrW1v6km68mTZL5v4grNgXwLrkfSRLmox8MampPDPRwGZcVMtdiWedSNdW2VCML1NWvCrcNvWsjjuj5",
  "key2": "3ckxnV1YdFqzKQHGmD8bBWFFXj3ZcwbStEqQfbjbuhdPZZtLMQjreYBMRmoaHdmzFAtKijykdNjwL7uba9GbmbLZ",
  "key3": "5a11Cp3ETpgw6u6uHWpiXE4xMZGxUyaMhctgL4LQucxvBHznUeZPwX9Td1MBYLVVoUYYwWQKnLqTd8iQEPApqL39",
  "key4": "Lhmqd6GEhagYdEuXXJs3YErzERnAf25dYXz2TvU9hHMTnHSK8jJnTFNRxfBMx3Yqcn6jYpaeN6fZ9HYXP4ScVi4",
  "key5": "4vCo3YiSHtxbFyQi27tALgx3CizLwCE15MkTJJ1ZxXrw79vWSN666EpvKeXvZ94qzF4mk5uV21rtK2joLYMD8GhU",
  "key6": "5q4DXmfVu38id1VoWNNoibdu4eu9H9jGM9em5tDx8jEHTkokfokDfX9jrMF1y8jaFmkggnfz6nVyVBdvaTgA7hkw",
  "key7": "62Bf89EdRpfWnqTx3EE3BCp4V2HxpphT83T8yYGpUkeXg5zNiZfknjRJ6ETcdr7idnbPPQJGCQMuzTTr6ndK1afc",
  "key8": "yLKskZEwugMJnv3z6swhnpMtPtbEfMXa8bu2MohZDW49ScBHZvXUyELVyeAKGBMG9ZNxtByp6wAKh9bNGR1fwnp",
  "key9": "4YXT4hMYCzVkxypRti6iK36gXG4tVusNPUiDqfb82kKx8WHdeeRMeJ9sKg2psJkzPtezM461UDoPoaJeXR2DdsW4",
  "key10": "5HKj9gvAxYyKMy59fe7jR257VPfQzDJ3rjkZy8RT84fqxHNRWRbv8cQH2DFwAPdaamMbHs5EdYzKMFHmiv3VSSvU",
  "key11": "3ikscRuA3NJcwc7UpmexpxZ2taZp7kdmdDG7xBi7YrJ98TKMwg5SZaZWANzLzYuiBvDPAJpCJ98e3eYb1kSuTdpk",
  "key12": "5zYigtUyCwtxtm64VLmS6PP4fNikqaeC2bszwWXxshaXZnydoa3v9D3F45oyoH2amEhsnMEEHNrpAaCju7vEdV4T",
  "key13": "3s19UD93Wpbk7XW55mfPmeyXx5j5DkC3Kiq5XWrEG4jEbiuoDegUhGmLrtHiornmzjPxRtBuCdqWjSHnCGUyyTv1",
  "key14": "4YgYnxqZ7RbTc2vaYdXyRafg4tagjYAvy8K34f98UzLyqguoR267oK6Qeoz4abaQ42RYtiTahYEiuzGDtT5bYGKk",
  "key15": "247FPgKuXBmetoTsZ4G3wA4v7xWrzjS3VRRyHRivX1w27SDhJxNEhuGJjUVB8WSBgPiiTq7R5kyHkTx7oKz9Ua9w",
  "key16": "34uooyDo9mAz1P9gWo1rBJsUR94zbGQPiioYP9z2xFWmLHhU7Q529ezbDUutrbnyhAbLao5bYVLHEyM8L1MYD6Mw",
  "key17": "43MQ31S31XRvAPQqTWEGGhkT2BkzFEiyNpuYkQ1TYVWAaoDxxyc6QrBvf6qUQfJk4suELWsFunC2LSF8qENe8UhM",
  "key18": "4mmwcPBQJmLbHtXG21L2o7cviMZdXikJK1VHoatQkaKD75wF35fYbXesS4DwbjYd2gyM9kuCuuNDs4tmo1oEQPah",
  "key19": "5t2yyNqCmLFN23KEuxgHWBC86gNADGWwe7J45sKdDBoh1Yce5V76ztJmaf6ZjaDkjuksQvANsESueqgyCFNb2AsH",
  "key20": "5AoPJzUr8MpZSQkJphs3CD2o44FDnkd7dJFkiSCYvbrJyo2mTiTgW7Pr2ZxdWZMvK9coRSxUcmpe51ryKqR5pvzq",
  "key21": "2vkmSaYHXkJJy4Sd5NBRcPJZJaBjVFDg52Kn4aXq7ZAQFmCb9tKFFfYYAybKCXTWWefroYKJ1BoqGurKJdDTRm71",
  "key22": "5ARLsAcLEXbg7YguC827TF51WZGpVdHc3xs3GLyEbh18taW54AN6gJ2gs1L3fz8ECg4m7oPn8MYEEUmQhCfu7iQo",
  "key23": "2mVhmH2Aj1iF1LyYnH1h8vHx2WVx8MuMZjNuQUhurpmNHKwcNwThQc74ptK84VFih32Z8ab6BHidSekLSEA7fQW2",
  "key24": "2HupPWq1bCyP8SxDggX7hAFcayEkrgoMtgTmcVjNJKHRa3YCghXdQaszgmogRFQ3Wxj5zQP1qRjNw5GJ6ZW5idfS",
  "key25": "2Avpgxgr7McSQyvjgPahtftuRzwbvYS2fBc8MNtFkzuLAD8b7cSsKK5ishpxatuG6dpEy6g3tKc7Bi22MstiPPXA",
  "key26": "3gcsZHVWFjremupQ2mqx3QuU4XsBFXXR4f6F9kqg2UbP6KXRfq6ThKoWTrRxQWH2g9CxhndNHKN2H8F7bwPzfAWU",
  "key27": "2xDkA8d24myfadLNk5Jh7Pz2rwkmyJYf8r7bxMKMwpEa95pH1cFjXnMRjbS7xYof5FTfX4eVgachwrCcB1wUfhga",
  "key28": "P3zRhGV3QYbcuDeu3FP59YV1hQuYYdvPyaUYuFfYH7vrCft4xy6n2bWDgdTDMk8apVtRQy3BpqWr3QmSDvUfKDJ",
  "key29": "qkjZLoY8dx5Hh5sopoKK9sdFifw89CVkZVexdgs1dwV8oRqm5WRps2Zeyu5Ci4yXQbdvNX7XoDLQ9KrdLHi1Naf",
  "key30": "4BBQaPCuhBbiKMiEUMoekPymv4v4cwh2zAoHFju82LZBzc9Khrp8FMoD4X79RhyTv1fATZwKKnLMKLnuMYZrS2eu",
  "key31": "omEU9ESXFeXC8eBNH3TLhQ1ppJQro9pUYekTEjm2eTShsAACQynjAHaVWeyJ8Cexxu6XWyy7QDVUQC4Xnys15RJ",
  "key32": "53MEsDoVHmHwYLe88S1wr4R6Vp7YPcAknmBbYZSm1NyoS7zAxqCqwgQUnpSt2f8XWP7YkH9MAB5a1oxhdLJVAB2n",
  "key33": "5DJeeFjfEcuuE2e5oLYz8iMwYzPEYiovmhXsazNemHz3BoApacXvh4DEMKXMNiARi77JHojawEJkemNCACKTM3DS",
  "key34": "3bRf1CqXX4RSpDghYZ7v42eGzk4m41urcCnRhKorV1Mhk6RBeqD6WEi7HpkU1UfhLMuSCe4Vc3W8uuDBeXcM3NhD",
  "key35": "3unATtc81Wz9FDcmnkAwDuXSPswtNHz1U4uZ1u1aSrkzgjmvRXP8EJNGqteytindU5eysUtinWwMxoGSB7Ed8N2b",
  "key36": "36VfKjQuqJfiP4feTpVBBaPgGekbz5JWCt7Vc69TDgjNBth3UmfPVEFm2ghcUGGS8BXgKvjhNw89cz1y3BD6L37h",
  "key37": "4Gw5VVoWm1jyGVghLcrXERPriJSokrV9HiYYMPUpwGSgumdR77gyhTVVU5ozVgxtXtjNF1kfjkes9953gK5Setj4",
  "key38": "3UeDRubNpkRPRpy1H9VwneLVVHxhXwopoKFntypvhqgYDtSWn3gyKGGLLd28ThcoFRpcvCiRXEDHuhHz8kqPL2RM",
  "key39": "5WiucYtzSPHLLd7KZAc98ENBoU7dgcjNk2LviBAqR7HyqqpFGeSkwgRcruj2qcz3nDtJiHMHCF7heXAYJY8ChBfy",
  "key40": "3FvFbstdKDmgNRjTh1YQtgAd8nBp1nzGU4nwnzvkLbGEYCao31zYTKgGmCtPNEDB1sJgMNxCzc1XTiZgyHeMC4hZ",
  "key41": "2mER2wu96JPLFLusiuxjqkcT8TdjksrgV2SkGED3jXtUd83DZdz8pTSvSuY1Lv961Rd6QeiVSSoAUKV1WKYdhGgd",
  "key42": "4TXRUik8EAEaTb7QKtRJdoJKgXsva2WDGJKJyqXGJFHTNSrmszffjNkhJkTYTQfMo3shkthnVXEsw8c54mVmdCpB",
  "key43": "2zxMRyp4XFsMkWY85e9QSGFb1yF5AbXHJc9WrYPrdPHAp7fZAWUvWUnFKHS7CK3ttNfHuSShrwHRpZ4hAy27gWzA",
  "key44": "3YLtHWR7picPgyi1A9cSjZuhQM3NGugVZXiwpm1vzBE9vQoEyo38cGojWoNdgLXsSo9PnUZD2YCfyDS1sYvb53Kv",
  "key45": "5tsV7GKonX5rDgKBrumnUHCzN9sFM7aQ8B9SUWXDrMghm4gk4aBqUFzZ69f7myTyzzw9JxrFa11QN2uC6vwu123J",
  "key46": "3WahPri3wxXtzHyDjSBNGx9PNUsqPbX5TwYFEqdJQntkjw9zerfoyrf9qjtAV1i4eZw1zdQWdua88HQn3qSMr3VG"
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
