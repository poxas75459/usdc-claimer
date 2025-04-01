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
    "4xt1f2Bi2bG9Z45XTtzZZFospqVgvCNotyqM91jcMmnxHH54DwnrvnkDAL6dtwuS6v135xvv34YsAYhMBh314Nxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WwjBhtpv7ZEhy93kmTESY3ha2DVwB47HgSoA9QZpwC9xTBED5wLKuNMK7aAqEm1JHNdf3Wk7jU5dMhUJLmNj1t9",
  "key1": "4tpMCo8BRTtmeTE2pfC4eu5bbiva9Z2EKNZEVuiWE3gYWof9H3txCJN3Hrf36SonCdq1wgBarjmyu8r3EzDB8BFz",
  "key2": "5c3vXWz1iLBQpiLAdeFsUvdVcLLNJo1RBfy4JedpQvWgfndWwDKhgkbShFYjpWFzGV2vccVZgn12QUXtJevaWaBV",
  "key3": "3Rkd255YBwUWKweMNxZ7DxAY5XwvFLAqpqDtbLV28GETJtCiCGZ38UC9iHMCx5ujvcTBYcpP6ii66HK9ggiNCwUK",
  "key4": "5wJaG7yusaeX5CFVCGuwtPPb1LBbHLjcfNpWKt1qq6xnXBmn9n1YWp1WSgAfGJHdPa2LEiFCVgxpyHB3J8q1KwuH",
  "key5": "NS97jD1JZdXw5ZaE4EGhJu1ibgzRuPjbqoNKvf4KMJvE3AMAapP8tP5qGYCsmkJGVE3SCbMUAHNYYPDgCtvsiUh",
  "key6": "5KPL75wxg7Gs5ANnCj9y6yTSUqdLGupKsFXuoFav9KzDqbFqbkrwZ2HdLPsEchPDL2GNzw3YapDUVqYMfwyWa4s8",
  "key7": "5JPVm9kJs77mZ3NJwt93uqaB3D8XnQFUg7fCMeMDsqfKUqRCgS2PFzhgVwqSXt2DgY2XqGyQ73p44tkqJ414tQkx",
  "key8": "5tRAKDtEZMwfQTuRN3cyUAmgAzFJ33y6ZcxCPUxHfEMM5kfxmhLSM7Q42VBiMwu7pf8B54VPg755NYL8auG5E2fg",
  "key9": "4PHDDx3eQnbVqy1JiTNTQjVg1JBPMPe1PEAQ5h7dMYJkAiK11SZ3k13ckAHqDvPZgueVCUeNS4HzaNyXrtG7Bvg4",
  "key10": "4KYJ9ymzjxJitV1AK9SMzCVw5miM4AMHXkxCrvPLyiQgfeNYFgtGXfcs8hMRe2xeJks3ACBqbvqPQ5zF93cbNmSF",
  "key11": "1fBwVKyszAMfpy9Kbr2p8bNcFUUGY77FrfP3LeuaZtTmUauPm89HRVYwcoAKhrMknrGEGNuvDPv1JRdDo66X5Ti",
  "key12": "3Rvjf3fioezrJn4Fd3zE4Ka12o2zscF2gSAdk3dKdU9U8tCMSFCcYY7sJ9gF5sM5VhNj2TBz7VtGYD4wSqzeEGcj",
  "key13": "33mZAniJi4wctRnkV5Limr4kZGdqD8d9XBT6EqpQkfew74AaQcMioMmVwZK9TVx1cRJfGXhSnZXUq2NkcUuoZBL9",
  "key14": "5SuEJvcu1ZgQcBg7PSPoueN5MznhCmLnRwSRGAnFA1EfqmrxvH4VVt8PkAasXT5HT9CDCB2QtYicxwLiu9wyDihE",
  "key15": "3zuuLyxqAu2rGSuYQCdvWRvnGSowD2dCQYsGtHqp2Ue9sb756VUwJVcBqFfG25R5x5rfYq7u5z2ZuHLjoPRBFFRt",
  "key16": "3Pyn4cMqM6CaWntrjgDhKNLJKfR7QeFCAFT9tXzC77jybMtJoUjJrrDG9wmuMNwPoDDTReQdXK1en3gNnrFHHDBX",
  "key17": "2qjXkNDUuEKogHrWEfamzPYmQBDc4kz6kMny7sakcP9Tkrnd7Ta5ZXHyKn9CYSU24c7KRAvMCrJ3ePRYHeYJnoi7",
  "key18": "Hh9Kq7NdWBAZUPZ5S8aCeVz2AdE8QxytVADFo1hKPtVYv8mg2R9CMUse8qyAubrnLAyZf6Ptx9hixaUeAC1J7UQ",
  "key19": "3Fe2RsAzJMtoFzoPRevUEUPS8HPXJw2w28EqL3uptFecHzGWB3pfuD6sxiJgQffEU1BFFAjxNZ5cDpgeNRVFeSM4",
  "key20": "2CNE5auvbqvx9XvPtVk9oHPNnYj4ZKdbkgpr2Pu6ppfcbJWrZ2mfAfUBzsMhUnNV5P1qPjpWdLprF8A9Gqb7fgdx",
  "key21": "4LM9ts9UP3jCHLmc1CDjnfAyngGdnpxkK7yufjixtFqKh5jVRXzDD88tLhhEFAe2NwB4KheJsz6UJDv82L6aRSYJ",
  "key22": "2tbeXNXKJs4y2wcBc2jFKtcRFwXZrQ1HVC3jNm9KVy6s4XckQA2M9SDwohQ8KMHLBdrtT5g6ZLPQWUu9ZTUgoZ4E",
  "key23": "2JSEifssYAgr1YhC9tPaHCuxgUKSojKRbiEvyqM8aphYsknRVo5YRgwKYSNPq4kCgiaxKZwxxAVxWGDMVSCoZFN9",
  "key24": "53Msa9F5E3wZYWE5Yn4uDHeDHg3dUnyxkfCBhSVfzVDFarSDTmQjCFE5AyMqtKD5k4JQR2t2ujF8WxMSwsovgw3H",
  "key25": "Mpc4y9rgJ36JX4Nm7hSD2LPFAoQ4a7CDPheB6zAt8ufuSctwyyreMs4HzhQQQRnzLwpsRo4Un3Ea3XV9WomnkwV",
  "key26": "4mbbxs4ULcv7SxKE9nGXrAK1Q4oAaEBLga2cXeKHaKPAd6cPa4LiR5d1kMcVWCroSoWGiymXjfQHaSt2ro6mvhDe"
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
