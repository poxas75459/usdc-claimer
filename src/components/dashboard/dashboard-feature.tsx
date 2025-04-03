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
    "YtiDMCQQUVrFaZMwomzTxcp9ufLjTNV5pFS2bH8CY43hurUNfcy3CkspDktejM9pirSafyazSLkCr11SbDSmrju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGBksCQiS795TPU85VQDuLgt2okvaYYzN2iheXXbGK5FXcLdY84Ws3vgnCx8UUePSSJKHnGVXmZhudFAReRS2Zx",
  "key1": "3YKZp5RmjaMQ5H8oQmMnjeqsUHk1anTkWo9f7d2cDeviFpGHYmF9xxQyTnWR6sg49q1VYtEtK1mkSrEtqi11NcKw",
  "key2": "Rd5pnu8wALAdgejz2ZnRW5cTt4k92hLt3JQUZNBZK6iFmcDeLQPiFYBF9CrjEsxEdmfZGRWfhbSc4Z1gwJ4GGrf",
  "key3": "31ER9apdkNme6YjWvasWEBSxDeEG5WAh49pGtqXrjzeN9nTQUbqmUkvBBj8CJDLUVhfTZe8osNfX9LkrThfrfJK2",
  "key4": "2uyGr99omuiRihEq5cSHxHcNC3vF3uDy1Yd2pCfmdLhDpnQTP7TXPYFrY54MNE6tinoJ9ck2zR1SdevnLc5ajW6W",
  "key5": "8h5asxAaAprEhUdofJqi4qSXpVU9iVLx1AqfCTuyc3x7UbSkyR32jvDFTzCZZucXN2k6vy2kWVoCcJBxz5NU8Pq",
  "key6": "2Fsg7b744CA3bPyz8aStxJ6JY3N2qBjyoqy9ZRRSx7XTh15HfJBaZgqzTd7ksJEHMkBLVLoPsN1K5a4Z4ENAMA3j",
  "key7": "2uEiQy2SQdZjwRSyrfEemagz9TjMSht5b4yeQSpVexnQpZr7Ss1PcQrTQpz4ZwDywPrTZqpLoW11qYGNK6cybjEN",
  "key8": "3DP8MwFUbtjWLPgf6hurpWRYLxF1nkCHbwdxc2xQ4j9M5Fxc5XzocibqSKbwBftoaM8qVHmEHWkBkPg7EegbVb9k",
  "key9": "3ujF5LKSiQFQfLaUmKQtNtHZCgUn9gvYf2PKMjhwGirgsoa9h2PemfFg3vSb6Pg1nw7VUtnCg95iw17EXhyDfC6w",
  "key10": "3ac9UejxUVCX2T43qSTXeuVkTiUTZL2e3ZyZG5CZL8EgDX1RtsDcPkP2jW59ofPJqUJAkT2gjJ6iwr4Jed28Pb4a",
  "key11": "3CzFPn4pa1rLkCPqofawqaPpEbPGfEvK7M6pLNxshFNQUDFbhawTgoPhXCYUgj2QziSB5whYphEQuNpPzzZwwvoE",
  "key12": "49vooPxWZroVqVnawffCwVfnPkv81tueuitNXeohPDkwwmBc27sPnNGfAMJou1N9ZKfUWRowXe5YxRxYQnMpsmLy",
  "key13": "31APV1JiEwiP8PrUkFBTmi4XE39AJKGtTvhRAyMJPKbzyipwv5X73PkAVTCMT9zB84naM5YXy5CPXfWxP5U966L",
  "key14": "431m3PMpFtcdQ67Vcmd81HxtKFC9yug91hhAe3D1GEmnFK6VzBuD8ziCxRj5yXVpTPiPjLq1E2nepPjsp2BnArFX",
  "key15": "4Mu7PKAHXrKAaMbLucAyfEzvGggWpE72U4TnLseufrP4CfMMMKmiEDQGNvQ4EuFdgHexR32nD3LKW334UJwYV1XF",
  "key16": "TzdcppWXmtWGk4YnpVD9KP4DwPoqLBSLbVn2KgpKCrMDi2xot6Z1rPszJ2mxNxEbHXn9KZUnUM3C46ZqDiycU61",
  "key17": "3WoQeYRAXexo4PTX3bLVqi4TwzwbuccHyz6CoRYdrBDbzZ1EfSCe9ETXVuJQFe92Tv1rjEtw5i9MvJxq3TYnqyqu",
  "key18": "GadqXjr5ApoeCN6y517DzxEZW8tE5wdG4fAgjmzFEn3z7TZs8B16CRqF3CPZwfAKaULSpc5QbpSBd6yaPqgTSfK",
  "key19": "5yWLdtoKQggsiaSsHocmHkyg1L82tPa5o9YAwCPqQSc99vh92LW33ijfRnXPvnZqqWamjSfvAUfMJBN93jAZztaL",
  "key20": "3eefzvrV7ni4Bd6CqunzR5dxiFpuUZK3DKgQc6EgmURugbehpziVGLqVn8s41AL8it3yV1RrmhB58zCMm3SCrtoG",
  "key21": "i8P4wtrALABfjvsUC6TzzrcVWzjRE3hvdxKAdFsKQaF4yQRXz84D5BemmQNprwXz3wK7qRWGwU4Wi9cit7mp3d2",
  "key22": "W3yNAQz2zbQjZFgLteRR8oLqV6pkenspWUhsgtTFSvXbRv8rJDEvkmWWgyDukMccAvxKitMG5PbWmoHwcBqejBW",
  "key23": "56gV7CLEgJVQd57ecctx5zztbDRYuJY3UgjtCcQV6ptsVJ1PdsTSKtwuC23MtfwceZSBzkfyPQd9JpaeNyLvojrC",
  "key24": "UxEGGkbh4o1sCwaYcJbih8SP9BAa4DxBfakskuo5c2KpySwWpvsMPmnPgTX7bGmbFwToyypLTjL2yTtv3ZcBvUG",
  "key25": "2tfY6dqcBotEkdJgtGBghnWN2zFKyotYW8mK1VmhVeLo2XSfaD2C7J3imkJbHYT9mgqNRCbGGKMFe1cDaZ6exfST",
  "key26": "3VKQN6EqZBJVmuXSkXCGDS7pRNp9ULKorDfanvYYjokS9QArvzqb5fWr33koMUwpQvK74F1iHC1CxrEcgyUzVcTh",
  "key27": "3HghAoA4DoYtKGnDjRRin17amfjApXvRFCv1KhqaXrAgaTPCUVD5iNiJc7PFFSmN1kdtY4KUL9vBePugjCALAxFh",
  "key28": "29uDrWkYhF8yHLieUDW4Wi3MyYpnLwSD9nJFA6g5GH66TL3XwHpswejoVPoCSZa5d1zs41tqT5HjQGfMdSxjpqLv",
  "key29": "8PJ7LyPtkaomCUaSycHorfBxUayfisXxTjXFFbLdjX78wKPUnd1Hrz3o7cdXJy6B4S2P5PhpEQ833BzTYDp4BGh",
  "key30": "s1LSYk3iu2SzjXvSmcKimeogJrMqJYmNaekr9f3RfDHFR3boTsnDMPeWxDQy77UUcHUEaxfCVyeMFqDQB4g8z7D",
  "key31": "5Vnfc9wJhYmsEi9dwMd5Ar4aGYfkiVPuCVwBQyZJc72DHX15vwoWLBnWMRe6NJbGUu7mYhYjirhFYkrPmv9XApam",
  "key32": "4PyyCSLL6FpB8LLiYPDF8AEJQyndRYyR6eyiMHL3XBAxGAzAT9TteXKxWtaZk9JdDoR2c3G75pMFhcD1ApuFbZdZ",
  "key33": "4hFHmLZ9TpJHEbcqyHGKwhhDNLJEbrTuUnVwpJwkQsxWVsokuwkDQthDDbovPMnztrfm9kvmsLUhKE8yC9vNAiXp",
  "key34": "36bnVHHUT5krXfgpoh3iC9iKLnAm7G6J8JgsxBkU1RHCdKfuLwyNuvcXzCvNzJR1bjDadV8HtXRAKHqGYENRoYSu",
  "key35": "5paMy8ev3b5AumLEQ2DdAtTyNp7JHpxGKGmbrXR6mmS1Z8EqfUWxcLRgXnfaZujhVam4Q7NUexAYYeSgVuGAGWrT",
  "key36": "4MJuAPpWx7UnQANMtBFTKG8ABXQWPwbUHEsiWQXpijNpuzJjVAg3DHR5A8ocP9k7h5TzYT3Rk7LrQXCPuQCLnKhi",
  "key37": "zvETXzLueNXK7qtXDGbJ5UAXr2VRaQ9TRpFsr5VvScDjB68Q6JwRAE7JGF8wU2Y387oTFpJGwtc7jsM4TsATyJE",
  "key38": "4QpiBENvukkPd1KNfWyFzhVfmvXyF9h8hJxP2YeK1M1FGi6B8S7GmjFxohgxBg1CtmrTJXRUPdBb57HouGnTCoWs",
  "key39": "2hxzskxvs4uqmqAkRqhdGZNLkAZRb6Au9KrMUbJyicvtcKujVNW7LveQpu8vXwQK4SgVEmUCEbaKjVJwbvpf5LV8",
  "key40": "3XBUJ4N7NLAjoQEie4gp3hiavftWjhZRvcSz7STcNbEaRoZBYGD7rXtGcpqti5u3mdAyEyutTkYwPXKGxuZ9EMxb"
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
