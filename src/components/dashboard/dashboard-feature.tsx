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
    "3XE6VHLcpoV8LVvU5cBJpq7ZdNRLFnpwscBc6jzJXtvtFmVcLKgZ7hRMB3NTVEkvVjb3HnK81KwSy4qdn9A2G9oT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48zpK9V3dEkqJvHEtFQwoheKzDTc9K8cFqyM5bHy1hzjJEg6hJrnRh1ZJrMcLVypvmytgeJAfuRdGoYVxp9cbPvF",
  "key1": "RzS18JPDgdGafwmKB7qVkpbvcz8TXRtx7KCnjkwZjwXeDQfBgYVob9ZaW7MnPHccMsoSz3cjKia1jDMg64NRkD7",
  "key2": "ZyTQ5MeVCKUgDTakuuEyNRQdhoMEqCknFYLc8fWFgGrq5iePqdzvWet7F4ngxXmeCTrXJWk9uxByWCDWy4s8htb",
  "key3": "3oTyiTiSNLa2Pdx2W8TDSFNfuhrUK1DXEhJcrCtxjzPLozssFyXLqwPyUexoBMweN891DioSqMtVeMdAUGQzS8tb",
  "key4": "45rKYqFF4sCmscrTZXUxgqF9bcvdgLJbv3VEuppFsf1dngyxnmAiY5eEhYM21VAj2KV5ZDoB9PaBQeyWrEPRHjbo",
  "key5": "3aCYfNYh9wQc5Qer8Sm8XhSwRittEA94ekBiC3STnfZwgL9fi1tENe6yN5J5oqgEJCuUZ5ho6oPWgCtDZ1BYniR5",
  "key6": "5HY4sgqgrHsu2nw8ufBMoesnTMpFAV1WtgUCB3kcwZGgZDe4SKzYPyEawTovBxD78qh4AAjUaXQfpnTdnUbweZXQ",
  "key7": "wS6zKzwEVLAFkrfhUwd4fX4LSmzXKjjeVTFWTqNvnLKXtpXWeDEFRoEVxTUZPvthWZszY9PUrswJC16qA3C2amR",
  "key8": "2mYTT82vfqmhdhLufr2cnoEEb5aPTSNTsvBGTBaPPv48NYSZ7fkQeQsY5kzTh8qSCcHtwf17CLLYe4RWuaxiaAjS",
  "key9": "4rCnhiEvxttkF79LGZRSeiEMSUx1amDVx2Pf8ji2sdDQVgwtKdPUX68MzECPS2S4YvkF7ukKo2KT4UtLotdvstN5",
  "key10": "4fXHMzBdUUuiwW9bu7mp7V3dTvHgEGpPMprK5Fk7hp7hLJZNu5gPtyaefYvYdhgFkGNQCR69F7VUvVoQbyUDcVcf",
  "key11": "5FuDytV97zamZtwNL8mCu4xqoyC7bMQKADvAzQrkXdy1xnEAQAgAXSRnLG9969aKBcFiD9pjBBNa8zXiEeZRQDCp",
  "key12": "3xLdz4P7qFX2ZgtUvXLRf2Wsh7Jnnv1pzEwQFF5aGT2SmmQ6cwj8yMkM9vDutkyTnMAvQNFkfKAvA4F853ws5RMk",
  "key13": "4zRWYBCzGJGMf8hrDqqtnhdG8zKWPkmmPVLL6dQttf2QwEFPWRVx6sJpNPsH7hYQB188cDSJ2F7mEyewXavvVtZA",
  "key14": "dbVp2PJN4FW17CPTjzzcscV7cSy79ogZeQ6QaFxriohxs7frRXnmgnLihFiQcho1biVUAegBHWWLTCcXFTekue8",
  "key15": "3Xr8bE4uqejGZiqpkhiC9heTKL8vjQN4CtXRMKBS3m2Qr7KdgFxYLf4G1Rz3k73WxwP9o3QXFjcbazSigYcpzDM2",
  "key16": "5ntaQvBb4Tti9rmmEx4RWEHcaiz75WSSTop2nACCvVGu3oZQLgHXCQXmgoYm4L5YYchXLvWWerKMHEcb76rRUvoR",
  "key17": "UniTqD6XsAzAxvRCXzjmMjreDveSUx1usRWx1ziSFGpw2csga9WfBN8QPKBMsKjPEhFvvXSmT1RkHavDsjQGbe9",
  "key18": "EGESk82qTMv2VkrwkcmnWVc4t5i1DzAuLzE6QRYmQkTw8Yd6FbCvXNcKG64KWULPWJf2MBgRk6266EcNeExnZ4w",
  "key19": "3KBXyGZU6aj259kB7nKXY4nzqByvsNtnpuhjUvxLpuPRshFwgNLXiPskaCvq1Cry47btk5k7FLVwrJkD65RzQVdi",
  "key20": "5qzKawZZ5heAUcZcjJ2FjamKjXn3f9hE3Yb75m28svkUHdNdEC9zUDBimoQEyM8gzLEfsrogVctDhZWJcaEJxxiR",
  "key21": "QbbHuLNuGs1hk47LNbHKC7xZgSFWgfENWfjy3sZ5Pg3vS16WtqVNJhtExHk41V4quw4t6jotPWGqq4bBqoLtaSJ",
  "key22": "2YjDPFaHL6Ev5U2HhsNUsF6kshVV2C8Yez2ucnnZ862W588RTC9e4sdMbe81mc66eaYMeqC3W9pErA6C4VJbRCUB",
  "key23": "5or8KuujKPaRoLhfrktD34qwHAmskLBVNRMkuCnkmaWLhBrHY8B1K5gc9Y1X2VpZmuxLAGjwmgMFFCxFrZKSJUTA",
  "key24": "Agxas8VzDgZFktSZq63kYq22UYx3BRV7SHWbnqBtVeZ6saKp3hityKvSuiuMpAtTb2NGtE37mpSyLEEtJuAz6dC",
  "key25": "5EsvXeD9h3K5sFnWBraa5VmrN78eTiC3njH3S2CgQdmYQGigEQMAD84B9MRJyb7XzzyeQTywpqAadBvp9YDc4k8x",
  "key26": "5tGCAKoARfoWq72DM9QXu1ohCwysrahtkXvUrmuShAiSUZLWVpQkcUcP3FqvJvRqgqgyRxggh8sruxKt29sTkKMR",
  "key27": "3Vft8sRf8fVHP9NHYE73uypN2Q9suPx3FKVS9KRm2RLdRpnyi1aqymb5W6SLL6ZVkEx4DEqHB6Znb2dDmHfesPrD",
  "key28": "44Yst7Ru7DmRDmcS9tmrikCZvuL7F1vukjALV83Nwu8y2G765aNWBdaYciRjn11vzAV2xrPAkwkzAieMeKw2we6N",
  "key29": "WfgKtvbzZZxby28w18oVzfvPqUf2vKUQLHeyXs7hyWu3kgoJwPnTpHfK4nqSgiyZdBaTp9czz5cwmrLgLpBHPC1",
  "key30": "4EkscyBPhAeE2FYN6V4WbQZeSE9djQ14HasGiKL9XqAy9MuZi3om8SKXuZc4W2jdC8hwdcdi67REQM4USWfXuJV3",
  "key31": "5DALfp9TR3kvY2HogMmVhX7icbuivSLq7Zotxxk3umuk7fcTAjTxkQouFNDkzijt1bC9Uz3NFXBoBRunaZx6snR7"
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
