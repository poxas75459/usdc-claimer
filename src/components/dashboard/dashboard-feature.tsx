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
    "2BTuTqD6S68HnWiGtk8nftUhtKR8osD4DYK8Q33j229bfPqWLmvcUgNJodY4C7nSxQpTYZ9bYmc2Ar49KM7TPbry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BF1kutnroNYtxPWQ8X3Yj5RCNRcJEGrwQJ5ZqSV2Pg5ooL7s9Cd8ocJyYLfYb6As4yXx4cZNtNk3QQsqXWwf6Dt",
  "key1": "2afyy531LUsc8VdaoGQ8oHNhH5kHQB2fv1nyAiaAvTx6d7hXYzrP7X2J5DxrRavxSAffjjz9qJN4DuBpxCDUs8Ww",
  "key2": "3X8VwrqrzyFRKpnbogamPMrXmA2yZYnmYkZz41VY3yXRT51qdoPhVfLDqyDvXLAnZFgjUV4FZWUDyLPCut311UGC",
  "key3": "REywRkCvD7CievoYfQTd9i7GYTZTPYWH8onRDQLY8SYeJv2iFBkm81ZxUWq85egcBT6KYjTdy62kXwzojuuBKrJ",
  "key4": "6BGneAV8mHKM7wiA4b8UoSD51Yn3oamQTUV4x9CPMppuwmuunpLTaH8vZat1tMTpg2MXscDb4tPEgkP8Uder92g",
  "key5": "3hPiNxpaBCVBUjj5RinCWhXsLcEHHSyaxr3o7vkSrpMbVR7bvivRwT3cg11dfhsTSmZBeQJVYfFYDqyeifgVDqXv",
  "key6": "3AcbczeXRL3ah43SskzUmwbBe2ACVHjBWWWKDZq4uW9mtA4ks9yjeRCvSwfKhGYQrX3T2ZLjxkJirp25wkJeXEFg",
  "key7": "4imcS6czEmfz4pEwQBp49TXZDXfgNxLRSQG8HsSt2b8TvyxPji913kMRdwwmYtLNWhJijWyVeUM4ZN4yUn8oX22J",
  "key8": "3FPmsy8cep8EZcqM8sRWio3vJUDy8ChmRRWFduShEBsco3Z819sZxouABepiXJt3dzGdTgW8bwFszsJx4MnRmtuF",
  "key9": "55ARN7Dbuy29xj34U7BGQWnW9pju5CMEc9RpgvqbfJkLXkK14p5fGLdjHbtxU6Kq7NFE1NPKgMtDxs15JWMCdWTQ",
  "key10": "5sjK7fZ5TG3tW97Z6asrEDcicEqZjoVGFkSH6nUudX4Uz1PcLXD7Mhazvd4o7jzB4yJba2TfAmGrwJi4We8CvDZg",
  "key11": "3uvPGyyWZXfce2Jh71kAWRvjvm58WWKnvRdMbTYeGLpKLxxJ6zw39jmMzHMiax29sGU4KtV81SFRcbtFaMKoLH1h",
  "key12": "3HLhCavTMbUhaPg1rYqKr3LtspYdDDSEFf3e91CasS344D5cHefZvBhg27CaSEFW18AuKTjr3fiiufaHAekugCyv",
  "key13": "3MsF1WGQQb6y4Gtnm5Dp7DFBWu1Ji18auoPSwQTG1pmY3Hp92DBqQsevLnzYLeVQFiAMfJ5HEG8ZGoQ5nUDbvuH8",
  "key14": "5wqbzaoMf2RuWCTXSqvoSN9F4wozcfCxS5jBLmfYAaP84SCyoBuG4cepAncLr6TZKxQ9ucnexjJowsTc6wobLbGT",
  "key15": "3tLyiAo6MxexKDdubWjUmaEYwyQvw6aBwPP7V9rSmeaUH9XouGfRwELHRgiaGdpANf8oFaeQQ6hJrtA3patRnx7m",
  "key16": "3RKhcs5oXiXqJEEtChspK6BejsUZm1RG7V1RSyDWGvzoDTBuF4aQGfk6V6JxK6ksU3brPXcBRPdgKwu8mtbnwLkS",
  "key17": "4kdT6cJQCvVSUv28pu3BGwjTaBe7NHek1DjFBBzpMx2pmfPEg22WWoBs5HTKg5w36jEmgFSmYD22uci3NkoiaLWo",
  "key18": "4SBGgnc63frGMHguFcZGQiVmo23LrU4aBoxJvfnFgwwgLAFbuyGCxRJLxhajWesf5Wv1ftrP4PGg9kpyC7EYYp9N",
  "key19": "gHwFfEqt9ddRLpr4EFy5cxPB3XzD8cTedg5dbLw3rAuHp4aGQcfWXSnQx2dvAojYxU3oB38aLh5ZiuKD8amePbG",
  "key20": "4zUNUoxhdLQ7Sg9rLRmJCCXaGTXXgH2WrvqTpCN8zYzHE2QxFZpMu5JseYap8k8xNbGSHqrimPFgH6fPfvNuz3BT",
  "key21": "5XzRGFg6huoJKmQp7hmSH1Kfmnwn5hYHsxyxbQCK584s1SMCkpMnX9GjWrteGAihggwyEwVsdBBPnESHPMdnH7oR",
  "key22": "53do5sRzXN8cDduuicpfFBqdEJ8ff2xzqxftKGGhkcxdnosuCvzxLtYP8NSYbEyzYQoQ1B2wGTxkyrhKW8ZDwL1A",
  "key23": "23ZpEChufrBejpgrZCbmuaJTSAShaE5jiamMYLQRVDBSBkeJYLbBrJo6NdQj7yS8mGfcwGXRALfw47pSsfkAeHjN",
  "key24": "5wCFnpvjNtjfSRi5ep6e5hs79siTsBRDaZWHL1Cme9LXjU58jhQb8CnhQkek8xc3Vk2qz799r6iyWvMhzZWqTi8z",
  "key25": "4jxhf1zU1weX49mSD9cyBZmWL4pkExaWqxcmRHi2qa7UFyDFSXturZ9YdN6YFWMP3XJvg5MRSK22GEJeBJHzYyVo",
  "key26": "4u8V1P6gm8zg79Hn3rzRWSi7F9wwWbkmTN968RoomSeiv2eky9VysiXJmzxqYcxtXGVZZYPDKz7T8A4eypebFzx7",
  "key27": "2BFo9gNZTRJU9ssTQMsEdV5XC5JxFmkjsLMBwwoWHpJEZaJRHGPdxKrwxuGiiBnBKt3vki11xiKsNvwoHu8E376W",
  "key28": "4Nqg199sCiZZtLkDtcgo9qjS1TmFiWx1KkqPwKaqCwzaa6umD8jn4tHtsXN4HRwxC841ZAGTTMiiUBd3ZosNKxtq",
  "key29": "2SgRQK5g6SVSqZjjtWJAnFsYWeSqZVqXskZ4dMQogpGErerzLNW4QrD73Q9bvMTS7w4dPDqbQ4X65h5anc5MLFKg",
  "key30": "3BLEUSxmFgFysQkpApmcborXK3cQYQJqXHfnRBumy5Jh2eji2ziLJTCn2Xu4Z7p58XrTHFcpmfZp9N7rXxUrVcbU",
  "key31": "4ysng9yDDUDZHVmaXKWLzHc3p2d5j9ZhkNgT9HoEQ87r4xRcH5oSiW8JAQU2sK1bq4qnPPiqAymMiJX2XniZhPZg",
  "key32": "KKb5CAMZC483U8xYWqeqRcYphXGhWDAp86e7sYnJ3roSgAmT9c6wKsbzq88Rst2SfVNiNTQg24qA4kJD1A8Ff9X",
  "key33": "3PoLTQxqxnrfjmxTX7wjoHbvUmZXBCuGSNTCe5XyZAP3Rac83SdSCXEq1ETBwMxkhQY4qRMVRnyckYoMuW3eNzeb",
  "key34": "4mts2MYdPSqXZhkS5KnDuPx4zKK6pCvZgd5SENeXwDSTzxCvrF793xy2gQ1EWeDneK11raAP5ejKt1MaWTpnUzeM",
  "key35": "5xFKCFnwSTR6Q8N3nHsPhmYAwuNQDpopnV1t8ysmSYox6TgFrHVVRtFNjVF2cZfqtW5TN3nuGtG2xYFBdhPE7Uaq",
  "key36": "3Wg8GLAKhWvKhmVwTLKnWRC4TnUCEnjag8vnoTA8HodBrZt6ADiMiL89XsbE4weN5RBJdHxn5SSxv3MXdKBqZVpt",
  "key37": "5hSrp2etghkoecLDP3VPUz7pY9oFybDeT38DZwjKrYjMcGxctSxpwnkzfC2Xt56HCMAmBScAfxGwLxFJvMBMScve",
  "key38": "3Wik82iU84UwWpmb9sPGoHjGqoigF93qhVQWxKvnjoiAyzVFnJSte7XQLefLtwkh1uM3fLncEUPnYkyrrcNHQz9H",
  "key39": "2tp5tWcoVvt8deudtsaMDkH5hh9tDkfyuMUVeuQf3JXBw1Ukx52cvLZ2eas9kW8ZEENgE1LGvMprrJhQAV9evBip",
  "key40": "2SiXX8D1HwtUZBSrCq2gERkmo9m2hod83UKnuWoy81aZHBJTPKyQGmWjq7sKDdk3z41hdyVZBBkFE8ZKCaXbU2VN",
  "key41": "2aMMW7yDQMwCRZuXLQ8TPie7pDGfXP4JGXQKkHyZsKejJxMFspykjgJWRjHt9vM6oid665c1HJ9P9LmNuprzchLe",
  "key42": "uAdC13xEnjJLfqtZvqrJWMxaTzLE5eRWVmoLoxkZFBwao94gbMXXeqac9ag8h6hJWvoC2MYGHmBAkSZKHb77rXh",
  "key43": "4yjeE7V2BwTQsnDgrFVA3QmWKcDbpywyVZYMMGBvSphNkoNfWWMkmmY2cwTap8UwXGWZWdbTqx9o9HTs93N99rt8"
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
