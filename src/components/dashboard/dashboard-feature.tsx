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
    "2WezDtwS8pKwz3qiM29ouLMscbjPebVR5vwBo7NzWnjmotoJWMBDiLbULjCxCc7eqyb3kRhBRNHJTJHgEi19X4EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d2m4ViQFFDywbnm6s2D53xCwRwVrgLN79yYN83MPV61X867tnRzd4WYt7SeLjzjTTvSh7USNiyPQfMBzJzEbRKj",
  "key1": "ZECFjPcPoe4Je8WudqMkd3LVFDuFVgKBgDexWzPcfAvNNua9HKM2F3mtgTRabed5qyMcmrX3J4eeeQaGJ6RE5Qm",
  "key2": "38wLYcBj71jyiSJfZTWx5nGyt7PgGPU24E68bBKy3mouTQFWLxMdCvnSRBkF2qqb4DMuYJJ8BvqvLTkiJnnmKMpT",
  "key3": "29DzXcbUKPBiPgZCF2qSHDbMSdXPRemUQjmCpPhcjLZnZxiXYEpX4ncbYLdiQSZdFVq8w7ruPLHQcCqG8juvzkUe",
  "key4": "KKnww5e4GDFKV2sj41pc8LCiJoMFoCV5rRG6Fu4K9HCvvHnzS7fKw9EZ59x3Mm5X8iASXiXp9TadUbEQX9x91zN",
  "key5": "3hPu9CKYfv6py4yYVD9rYFqo7981iWz4JCs7vHMVP366ByFvWiAGcfnZN8MFLkUgLCDKFmDJrnuxmrtmppW7rfLj",
  "key6": "3vbzQfgEGFzUDedbaNG52n1RCS3ajzavLH3AYHpHWos5wXECeRTEkcWTRUArsUveJm4UkwME97FUcjvzyuCvVC8K",
  "key7": "BQFodDdv1ZjdfZE1TuXcKSUbh9Lw6Bjeodd52hYuA4U1RhmetQM3PXnR9cxK6aW8YZAZcfLX1YnJrCUt5ycryPQ",
  "key8": "2Xwsvp6a5J6oMK2pvpxXW6mvt6h9x9Cw4njPwro44HrciFiPjg4xKCG7jnWKvLvDQKDPzAd7vD6gc16Kq9sfariz",
  "key9": "2TQcZ2ftkpeGGk19XL2FJRVtzej5NFbBo84vMBsf74Pk1KcVW5WXFfpXD8pdoxczAVHwfycgE6teYTi9LdosjHLe",
  "key10": "5v1cttqaW4nVAd3qRJjyvWoo4NtjPh1Umz3p9wvgoMx7ZcfnMrBG1wNNgNYM6j1sTAcmN8xhvGK6zokUr6t1Sdxj",
  "key11": "4k348BeruAG5w4cNbzs2JtVpav8WbFpmPH9GmVCA3KEovM3YPnwd8yjSAdJeTQUHcz7MvyU7sMCqcSYDLur3twQk",
  "key12": "5ZX6TxTu2Wgdm3aJZh48ZizRuV6gvZzxGK9CJCAHAtpB4HXGtdLVL6jUBrPePBh44B5Hb3gA3FQButJ8KrYVFBCU",
  "key13": "61c5d6yhY13GHVkk657DHqQCNJuxEMoBUvjsrKQdtLovo7fganSMEmypdixDnmaHaJjf3vuWuwYjJzxkHFTLxRXj",
  "key14": "3rD2qVL6KTnvFa6pRJR4PhmDcgkX9RLQrHfsNunkWMKd7211Jd5btMpAWftkSJv8sZLp3RMmgoPgyB3h7hfGsti9",
  "key15": "2Ap3DGPYLV3fdTznNr6hBfT5evUEbhPSmqfQsgpBXvscmCcJ6c7ysND4VmPZAd8HXu9Mu8iCmng7HhYQB1uqAEBL",
  "key16": "2i44gySaT7dEBJG594rmegUoqvyhkwnsoPDdbCAezGpCJwkh89Jr216FvfAiKGaJGWsar1fTFtrSRrsCCAn3bQHx",
  "key17": "56NrB2GBEnoZwV3KRY4BY8VgvC3SdtG1D3Rh7J5cJa1whKaAxBNtsgX1dHezHEBb2r242cwVqjDv582F2W3cKXdE",
  "key18": "3E85UahnEEQqqGqp98QWoZLJaStjDmnpV7JJJZ1XZPLFixpkywpiGumzGYjhBcmFKomn7o44xcJ5hvfcEtxBdTj",
  "key19": "DbuovMw1bm8mGzXm1BNn5LDJbGuzvNAjP459nqGhyA52xE39UU66cPu4XcKWvSnEBBbTsMXCLbduaiaEXMrvgwN",
  "key20": "4C4gfVPbgSqToTycC3NNpg1SfbXitw7VthnvNtHmMVidxZgsnv7akYyYRMXj4ytHnKmLpkSryhqm5M6ZhRbNA2uo",
  "key21": "5s4xuZLN3zCWJ9chCMqQH3jaP5W5t42yTed8kMDjG8KyvpmDpb1UaQvzE7Wby4E2141hsUqdjgFaVb9sVKLhVgx7",
  "key22": "213io62zKRKcQQjvprjKTEPh1yZgtYKHHxotkGrMbPcCyB8n1Fu8c8ruZUQyLBjfDWYEzDSJhnLyhA9PWvUmKxbJ",
  "key23": "5xgSMsDCzbF1P6Px1K3LaXAC8KoxxZLRft7EKrj4hFoiX13eW8hzTpjz4fEd4eCNwg9NWN4PwoGXUsrcdFGPi7ov",
  "key24": "UavEfmXpe2rGzhryi84dG1vDXakPnCcWb4jj5SEraWRErZF57KCKQB7EwDhgMxSYhPFQFppiwkdXpYv5Fv5XsuB",
  "key25": "2bRLmDFE7kcXCp2p3WoTzrW9T7r22Rtvaf7DVtfnf27HnN3hPNYBLUfptR5VwPfbyr1rJ7Cm5VQ4vt45eGDz8Ka",
  "key26": "5WSsiTNnbguZFuePJrdXqtPMwUhYH6XXRFYB1gJFK1QnZekZ4XXECbiqe2NZvEqwwa2cftW4T5augMH5C8fYQdhc",
  "key27": "2yTZ1HLADQHioGwp9kQ4P6Ncd5EPw7ag6iWZxkF33dcdBLfCsCs5Z8ymJKgSzYz7QEiJuhcWAEgbsN6UZLbFnQY2",
  "key28": "5CfYs32m7coA2GsX1RdJtUbGxCSaAVhEUuVQP3hnb8bpzGT2bMETjeQ8cXc5dTtV375t2ti3ugD4c3NGNYYMXxMm"
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
