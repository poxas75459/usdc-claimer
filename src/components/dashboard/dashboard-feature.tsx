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
    "5ksfvfVGG1FannyuvFo76RLuDTDrULQCuU6RatkuUfhJB7zFXG7JydoqxymYGHw6ScXiasNwrVJPqWW2pGjK4Yti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDYPSqb6o8yDaP6bZNaBE7MEciD2aZT4ooNQDX69GuWFSqws5gy55W9sE16KQ8Caa5VhdMAwMHgct5kqmhWawBt",
  "key1": "26B9M9DsEBZzHXuZJQYHbH62ck6Wmpd5rCmX98rWmyP7fwU4SjteAuMgzxTrZUru24yUmZ9HbtFzrp3pQuR9g2mR",
  "key2": "66RxwiGM2LyRqSdozVQGtRXbCA2yb5NzzYx8bBJ6zCT5Us7aVDnKaNgcLUAJaGTowWmL91zy7wuKniis2MNhVBdx",
  "key3": "4rYWphxLkpGaJSuPRAARA2r3JDuhWU8YpMJP16ZFi5fjmjL9gXVkaT8c3HYihWugXnfeknMVa8hxd2YTRmGWfWmz",
  "key4": "2aSXoQdQacY47MCSV2iErYTWHQsMe1qLNtp4qs5jyeWnPUabNy6rjxSC2CAq7ia4hVMh55JwPcPwUAMJLChARGUe",
  "key5": "4AqbnspoTjGKmqPV6mCxifRVCQhbLU8L96WkN5LhZk56bVXdfjbHR5r1NPRPuTuEMw98aKwfVpGz1B4TdZm9hL6H",
  "key6": "2DmKcSmSzNZekTGEjuM7BB8zBtNE42bn9QR2socE2sEdCXavndnrnnr8Gc33EYGUQPUB8zsnXXznFJhgVXjzDwkK",
  "key7": "2Vf2a2cz1zghvaQZx19DDipPFW8ugiitR52E4TbvDSznN1gwWgdWtDw2debNoN2nxRYZ3Suaqx28ovEESvXWHSeb",
  "key8": "4FbZ8qzqAWJDXYsXhzx27gW235SxK4DD1F8iV347Xoz1W27Rc7MX37JxyDv5CLcGKkkwXaL5aFMZr6vaxEggAHCP",
  "key9": "5g1Z36A5LFfWT54uV1xuau8ALeKMr2LLWoMtcRDeYqzGw2FV4f6UoNPCQPEM5FqDXVpK5za3ot9atZLBytoUYJKw",
  "key10": "2oLjsrPV3X1Y5wAsGrexxpFjTE5FZA2M7icq1LQfxTvjUwNhow6r9FNebfvnw65RALSJ3xfpoV5c9tB2VgFLeMQt",
  "key11": "B6xrnQ1DWNMS74tMMJ4XtjZEKas7yneYoTAUmcS2LExg2ceoJwfEhFqseJ4SaDfRZEABC89QfYuB1CWEQCzrvCy",
  "key12": "5qzmqMBnoy1fZ8rFTsVsQTDP5GX9vWcGZ52n7YpeJBxQMeabowXLnwvruvkQBsXZpAgzfAVVvX5nxWyVpJXgyoyL",
  "key13": "3uuTg2e2PiRK4zBRfEtzfBMeMvhE77FgeZQGjk9wf2UMep5jiGQpQ29E9smiHnzUQLiobNNgxKUvzQRsJhz3ZNbW",
  "key14": "4MP17qCxT54hHr4QXnNdy65tpjSJCvYHMyf789eaoz6NL4VXwKeRHywY7ed9e3L7aGQ5Rpk3cnE8VTrBvW31E7tJ",
  "key15": "2Af4xnyR6ehJkQ1hs9kuCdqBup2rU5aa7bHfMkLx8MY6XXBoWcC4bTVQyR1ywWNxkPuwk9TJpPUivHoco7fPfdEn",
  "key16": "2GjiAH3sc5EAM4nXBkCHbSpthSQEEzwJTttE4NXBQ63Ygw8fPGinvqz8eKx1868i9FoYDY4EsjtvXwMAm7ScyaSe",
  "key17": "dHWrMGG882t7sfHZ1cfi8DHys4Bc4ks3vzW5QWphd8bqYfhFZRufXH4oMVGgLHwMoLGa4Pvns2PbX92NvkLvSbu",
  "key18": "5yxwFFQej7o6rod2h1tNFbTHbHNyfoXNYZjRUKpEUF7m2ppWWWUqmHXtG4YBcVmathrUCxwRaLfbQsYqbn8DSW8M",
  "key19": "4qK6A5Bwr1c1RDCGp5kHLqv4mSRKXjUset7on3SwdTnHsfYBdcuxNMzmDgkfsceqfH5ePxdL53CntHTY2PKgz4Ep",
  "key20": "5xB5fBTuHwR8FnoU2dwD1m9NaREHxNAphCzve5BS8Gr2xr5V6hCoKy3JXWs3CNKi7DkRbBp7xGiYtgcyFzRkbnip",
  "key21": "oT8tqHKvxZLAkaEqZGLq65k5x9GCLNwhHZga5bCjBaDMJfci8yP8PkGo2DJh1z4cbEbhKUjTWVCKDhxh8DfoHL5",
  "key22": "5aKuhDahLX7THVdvC3VhbfcKpfMr5HRndfQLXA37KrttSM8PFvLBNMd53Xbg9NHDwyVxzq4LQH1ocoCTGdpRuTdv",
  "key23": "2zKzic2QEGUfkU7h2KX6tCZSVv2hweDyEnqSagG2BWJqTebvZNPHwJYwVH4JJo4255CobdJXWULHzrExUZqhY7kU",
  "key24": "3Bc6rbpa3sKAx2B5K89xab25ajcnr8fbDTrJvnse6G41wjPY2NmXUAkWkqfjPBf6jHBDExqDYSoSaht4pKUpaNF1",
  "key25": "3efMH1nu9GMXDwkmm2Z2fi8Mzn7kaQCQgm5nJZEyoSkRza5DkohE2bFpKLskJ3XUxewYeFnzpgGgyHFtczpkC1Qw",
  "key26": "5SwjDzcBCPucZGaRUKR72py78BEj1XuXNfyyY2fXuQJoYBkCsiEaiSHQNBTD2T156PvweL1tBc48iLV47BbGE2ea",
  "key27": "5sKafHTR4JubxbdvqFemGTtcUAJgWEN1BWbxnrLFP1Sm3arsVWPxCVUnLmAEzL2daJt7yYghvNvDCd8d2SxeaL6A",
  "key28": "4EQqRW8QxRqjS7GixZSwhGj2oatcVedrTEPDjxo9PsvFnFtVf4VaTFZhS7ThxYdbEWAhzL4d7o6H59wWsWP2GE2p"
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
