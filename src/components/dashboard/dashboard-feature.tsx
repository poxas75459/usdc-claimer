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
    "2rwCxTBPfMN7Gbc7efpLffiinhiBkTU8WUyM7GeZm6xq3UyA7mBnREojmun5cwYFErA7p8DkvMVjcHqmTcX1BaLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mZ6X8peqxtMT6FqYJ58piYGt5Rxc1PKi2zyjjAaK5VueopZMUgfB1Gd1bEuEU3oEMRUtZKkeDaVwqVG4XaLGByt",
  "key1": "4WKc5uJDnpigjXtZJHgbcMHkUJVTDjLU96t7bG9phz1nqj8HRsv377MfRe625oLuwJMrB5f6TpbazmpXMxSUGsL8",
  "key2": "4MEW9MdxNJrfzRqpnHWU45khga9YTWx6LKXv7ZDSEZrqAL3ELem9BmhGMWWt8XHGKWXfWruf6UfUEKiTL7NGsWTb",
  "key3": "2EUBKCqXNuBRAJjZA2PS6DPf3uf8x7ou8hQKaLXwbYQcdHpg1XHWqEhMGAA4edgkGJi5V7CPQTFdM1ZFPU8gmB6y",
  "key4": "5s7SarWrnLNtLDTY5E999KLp9typ4xiKB54CWJrcvJpgoGQZcqZQjskoxXp8LNSHGeqtgKBvaSzUEfnc7hQAC1yq",
  "key5": "4X4bLSUhrv9tpjKXzUwQTRz2VNwiULgpUMpsqbPr7RtRmEGs5BqAcS9FssYmjYp8vwzRVxMHF7moAgQpHGQ2D3DY",
  "key6": "3ZP5aShqXEAYnhvVsccrwkGBRnfGKv8sbMZ9WERbAGwxQzqsi9dd7dNQrTvehz7kWuvWKWkoqgK1jV2r36p4mNyQ",
  "key7": "5wpTy9Ypy3J6MedrNQtSEW55PG1pB1s2xhhVbLvk4mPrnXT6HXYJUGny8TDCJZZLkDP7kqzdKnnaxgUtqZkHefiX",
  "key8": "2vinMbLXn2qXoxDZLgVDAoFnF3RTecJuzbseQRn7NpGJKa87zNJVUp2rQXo4tiQdNdqkoq7VKbDvcrzNxwPExok3",
  "key9": "2XWxMPPiB8rEvocAFxkTd2VN2BxSEwUhEMVUfUELEu6PbuM8iQBVEJPGbgMnMgNEHMx6fg6mLuQRsSTnvTn9fLTR",
  "key10": "51xh6v5PwBPT4B16HhDGAyuF2dyZ7RSwBConk8LWynDZk33UWiBdsgRaFBsezo9KrXtWSgSde5g86obQ29tckXcm",
  "key11": "3MpHxkH9Q6zXxnpX3d2kKRF211DckyLhGDchKqtYD6xMdQPvHnYo6yF7iFQAecEsospZXYRur9QYrnV4zit4TZrS",
  "key12": "DSmH3gV1ByAcoBxWhnmgXeXcS9PeZFvqsTGwoWdXiBVM5M7FHq9pqC8pGvfTfXZSZCHXmgeeSMSZfEfYjC7bNHH",
  "key13": "dJzqyRvPT2Bey4KB6zD4Lfgxf96FvH2Mt5MmQm7aQH9dWANPh2AMAMD8rKgzdZU8TLZWMPdAgdo2Lws4goo4oxZ",
  "key14": "58DAueWo9C5JT331v6i6jd63fDVCusi3ZFgxd6yWVE3heVjhnajSStbxeLeFj1eBgj8aXb19wsKxWqyUFKoa9CmG",
  "key15": "2yEy6KKxFsXTEcqbmZAr3dV9QJsZoPd3X4TXuQ6htSRArqn1eePY2yDLaMF3xdd9YR78HGFYfRqmHWdKFpi16eMj",
  "key16": "x5C8CDa7VpLjjkEuewgaMCrEDQxqeJDvTgYUdhn6E8tdLuYAEWDbhkQ6oQJt1Bereuy1JXmnxHQFbj7HegN87aw",
  "key17": "3rmJ7uqMFVQ1N3KC8ia1aZW14FdDrqg7yfGBDP6eYwSvKt4mVxruNBYoqqFrZWhVnCL6ZBjTdxuBKpPXffMAZt3v",
  "key18": "2iUomo2fHJxwdzy4AQkRHG1T3FhPs3wj3vCr2eCKHfmo6ks4kfPKEbdTwq3imKTFc7vVpxgoahWzWGrp37ykwaVm",
  "key19": "57Ex51Tx2DjbfWCZhb5uMbtsMRj83qZ34CT4K3oKHqF1FUBRNJTjypXznbxiN9R7Pnk9CWSrN1uMjTUwNRjNVVgZ",
  "key20": "5CKjMHcDjzBK29MRertNWVUVan4S83BVakN3FTD7so4RzLmDgfbhnHZZaQGr8qe1YEJhbKpKLG3dmEQZNAqty8Kr",
  "key21": "K81t5EBKCta4qEbUd3v8rv6vxLPRjcDLadZysYWpdb3AvBUtLvBraEHHPKsfoX9uiThWgVTRh6sHqVqasuR6H5V",
  "key22": "3jDBUmk7bYkRPBp3g5CDiP42zMe7E1Y81NZ9FgYcSFSSx26gUzUtGN6kFuiSLfSVRm6gUys7rNGjekSGmpZ17GqD",
  "key23": "2VzctJ4C9f7vCbYYWhNFy2FFhYHoX7gjUrzuuKG9Q9s7pHGBKkXDfZ3UJGJAmRbFv1E5NVEaKaxU1BdUiqAiEmHa",
  "key24": "3SWy9GeN7HN1R8aVn6QxKvmZjQLDLvui7vLzVugb5yx7TApJw5EWhD5NJ64urcCeAxg7R5JsbMeZYiPxYXgwzUKg",
  "key25": "4rbvLpruZAx9hTadaS8tpj1YrKxuLfQXWp8apS3jx39aeJJK1tySAu8ZHFmeCoSrgfWCdpwpbLgRL5AB68D8fEFK",
  "key26": "3GU4NZRjEGqvGmCZtSrjYSvHVq5ybg2aF3csYARXCqEhMAgj9ancGJgWEsPs9ceUYMiDjx6XyCj4kh1SyUDSPCu4",
  "key27": "215ePxwRo8rfVGiiLiWKFzgsu54SYKJezopPmczyaiuMb6WkeaW77WRyp74i1mbxb6NA1FHrvSqpmeQvnQgBrSQu",
  "key28": "3UJH519w8hHJ9jLF8swhEJPVgMoifYSfpQUNqaPKtNxmEwf6JKNy3dU8fH8ErdWydSjqh9qNnDPxwTdB8mCfTBgr",
  "key29": "3Rd9iuZF7YWKwzPgeGY9tN4xaF8m3PGzbEa7WY3D4jpC2LZnB3oUCLR64w9pNc2Nn4zr4jJmF96Fm5jx53ek7Qdm",
  "key30": "4gEiyPbmYsFYzLiwnkaksVUgLoqLdxwcrgygmyo9CJDAY8FwHbDPRiweHV7aBQ1oJQKfN3kUofZ4AdQ4nqgGv3Rr",
  "key31": "4rFjkJWm9z1u4fNvWw34feT75bZrdfA5itMrcvLLzmUXDR9Ggf9qJPkoohonxrGYn8Er4dKPKL1Jzi73N9u4gQNV",
  "key32": "29rqSZYsLrxwfpmsfQnZ3hHqKj8apwB72yW8WJA2EjzpTNDaLq3EnFjV4sEVjzZ8B9gXF9yHy8fQasLnWa4C2Fnn"
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
