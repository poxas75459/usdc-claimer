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
    "UxbVBLVG1MmaiQwDJXXu2aJHoqRNPLH7Dfc4VBsKmcvokJ4kkWY6pGKD46Ur2qXNuEKjqoBtEVyMa7MXVXagmKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HRezmZyV4iYzFhma8pR6JQnJCCnfVUuZ7zGdVc7cV6BXymxXTnpYgW3mUEBVFb88DpmspUy5ibmdDQBt5qeQoD",
  "key1": "4j1aX9a9QGDueKJykDkepVMKxLjDACAEwJoxGijNytJVUX7C14cyJpdSuoQ3grNrY4yL57GrRavaXdqjN5Jo9Hqm",
  "key2": "3Mz7yFBe4uegdhRdhuveZPmYQrtyiNByVpgmBienJWcAiFas9rUVBpphUwpVW5iG1uJ8EARWRhR2r4zpeesv5KeJ",
  "key3": "4tdxRxdRDQsoqWtDDKvsdmPwCqanCyeRUBUTkW935KXYUQmhEwMWc44dZRgnC9sAZVQ1Vhc9t4vhKaNGP4y6eTS1",
  "key4": "S886R4sKomSZE7upL3TdB1aqtaVnFEPZVhaTnt6ZnMQZXAaZFzif6k9FjfmmUpnd3L1xWYJX8EfAD3PDEW2PKCj",
  "key5": "5qvRzSim54Rzap3XNDeZJT2sb4C1f47gJB8fkB9qtUL9yjYhBzMzCVRgm73h4222iAxHP1CNxvQctmv9HwGyhttb",
  "key6": "56kucpzVA9suzY4oMDzAc19DYgDLfnkXE31CE18T3PSaTYQmFPJUSLkq2cS7yNT2Dsvu9NmGvNkxmKhBRp5vsrhv",
  "key7": "22kesYBW6M3R6kcH9Bo3fjP7hPdDdmDD7osuzG5PvSwvucHoCg3AouiLcSCfLv6YX1MXGdveURfCynXYkFoDbe3J",
  "key8": "3e93ZDHQrzwySpyHuNYmCprMKRd5JLrfk96KBGbUT6EvxEjxexhhzCip1TrusZvdJxaRJdZCekaqxL5fzT4mtiDc",
  "key9": "2sthvhcfRZG7Jig4uugHEwCS7nPA4apxvypo6rn4VRz4xdNeChvXgRnAt4m9RtxN7n1mUSdXULesa6GMioZoNnph",
  "key10": "2wvGuaHCqKqNLKSxaEoZQsFLzB1gGsoMKEmktMh9iXUU3P4HgdfFwoJXTMKYrdwdcYFhqu5VKmHp1PTodix1sPFS",
  "key11": "KGi94iBXVn2iKzANBYXpiSn3chPArn4HiT2iQ9QdLHmJFASnbbsMtKFA5NbY6SMN88oQjF6UBY9dUXjcqN51rwC",
  "key12": "62AvstWrN3yZpu2zKk9U4v49WAH1XKk4biCfwx9d9Gw1zHj94JFCihgicegAT6zHiGv8mq6FTMVH6TwHZ1rGcdZg",
  "key13": "3gxvpKeKkaQrf2h8io9wNiyonLJE9soxzKMfkn44EsJMQVJrivmaJBhHVcf2k11ZXo3xtCduUxg9Gieid1aeSddY",
  "key14": "4AVFV7DiAiSiqtwwCGyzVzjj4FkSu8LHbPiSd4h5123UUvprqyN5a55Rv9H98apipaW1DNgD5GBa1b4fY2eyArPp",
  "key15": "5LD6HkzJEfAxgczymGjLAjQbqkyR5FdsfStfSvnpNGCAPzsMz3zCwq4tvvSttd26LUpVBPp1udLYjJS4ES8LUgQx",
  "key16": "C7qNzgSuCmnHVUwcYy1o4bW2yESuBjMqbGrXEJjzPGXQKaFhCf5F1BSESyxVjibVq1JRMQ38Rikm24TMPxyJPDc",
  "key17": "w6XDD2kmQ4VFy28KGfK99NFGPnbu3JKkZiTQ4fNSeGgmQGLDTnmBywsoVnd1KVVwAVHVT4JNbfTZWzQstVcEff5",
  "key18": "q18vds82sz2n1FDA5fVAVA43tDzXnFwpHpuL6TVxtmgneJE6cAbF9phCgSyZ6RrdqiyVDwdtA6AkTUn95Koo4rj",
  "key19": "51MAyxMoqdsV7AoVSanZERXzvJxWQaSr645bYyUVaAmfQ2f37VQNSw4dhrxeJQbVLjZLPJnTB4ujR6ztDuqRVs54",
  "key20": "3U6jdp5Wyv5MAHnP1gyuaXFPgcM5PeKbDb5UGCrSeKr8rijnnfPT1cnAutV3CtNGDngfvhYJWo2KBrC9CPypZpey",
  "key21": "29tZmoM14sYHnrtGmc5oED6kTrmS79kCA4etiNr3xZ5zG5WuVchYGtBwzcWyBYfenzH6dNCWVTnNFArJdo1ZRALU",
  "key22": "3U1SD7qJ9dWis5BpsSswP3dMbi5EDM2M3viy9m9Ckif9AF8QofBdf2hDK1RDpQitMWujM9Ygpj5YjjcMYpwiHicR",
  "key23": "vL564s1AWd72RLvafAFi58ASjy3RPJCJZTNReH7bB5ETNqr5HGSQY6Y3c9wSZpFmgbPjpxL4reBDXE9qnvrGDUh",
  "key24": "4WyLkujQDjCW5oCdSM4WsGiHTJ2KL9j2sViN46FhdNwLtEc8QnnL5ncvkd2rhe1ri4bWZbE5YkZtJXc59RFFvYC6",
  "key25": "A3YffSni2iVZZgQxFgoUro69JC89LuTrShP4An7j5aC6kkC3neVqKPC7Jd43JpvMp73uA6RxYTzqUzQ6FVRSKWd",
  "key26": "3pJ3herbk4dwZJcZR8Dyk2gvotPo5PCaf5V7brmcYSYYoq53485jhkyaFd2HHCWYzir6LVf34GrBKhYAbv2ntC1F"
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
