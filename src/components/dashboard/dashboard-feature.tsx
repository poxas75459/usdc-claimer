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
    "2voG4fPwdkQs523htZrqc3aBtSVeSiF4vgLy7n9gAyqXGD2SNbzNy83Zh5JbDEvRr8s6BfozFv4dqrqeCW6ttRBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQ3KhmtHtMugKbE7UahZGBs1yXmtdBQr1oRpCvuAoy1HW3aZb3AfBfN11ucLwT6pyUUkxS4EaeWUJxuYjXkvkHv",
  "key1": "29kgy14bS9SuzPhmpzi3twhAW11vdR9r65AaqsLYggoGyWkVz6FgQyfHzXRTKmdEAniU3cMPAgw4yvVtWuTMHEim",
  "key2": "3jnwzBgBLUHxKP5CmngvPL8i4hHAZNEUFW312XC3ZZ53t2N4FFTomLCjejcrUHDW916SyMApjbmp4Yb8FbPV18MD",
  "key3": "YQcrbyPmVhYCCBpjrUnmAKvKfoGc8RhSdZvcSHnRLxddeXSDHNQfCqZP62RdWXpCHpW9634m8vGTNjrHqnPSUu4",
  "key4": "2K3Xk9Mh5er3ZES9zX9PtqLiKReZ8E9H6Rk41KdTsVBRaVwZbNkGAnPjZL1PjkRnv7zHePs5oUhN3CodqxuMcFKo",
  "key5": "3sN8ZSoYjDiwdbihnYDnTcHdKX1mHjkaDg5yWsipWSfGs8KQLadWj24C8Dxb5K8BdzxoQa21Fa57HjHEfm8PEFnx",
  "key6": "7imQYjH7bww6pb4kuzn9wJigYDMM2MF38v6pGt9i8xgRKanS2q9Gx3THLUtduwgwFw28mqyzqyAD1QFqhppVPFc",
  "key7": "5u6uXpYqpujvDdwVN58reQ8sCfZjRhVGiu3tYU4B1nwbGhX8GUEkddigdXLPNxSfbTAL1aSTKq9oeXNvWbWTtDUX",
  "key8": "UQCNyHF4Cyyps34g1ymx9DLaiccH2zvYMpu4srhSLKKPtHLSMWoYvZnjcREezQB7p8vaGR7MP52mY4BT8itGb4J",
  "key9": "4v8wfEHBYs8dhvKuqrm12aXnSJdjNmaDC4jhjRSt4jVBQazpMD48aWd7SPEAX2WwQUfez8wyNBeRPDvW1LJtTksv",
  "key10": "4bYiwHViFv5zve8XKYTb4pTkRYQpRCZ2Ak3K8MjZVFqr4ZjAvYX6oKzkaV84ZJDFfdahJN8HdHDTQydDByRPU2QZ",
  "key11": "2w3TjGdWVcmzHhqLgx2fFwtd8VSN6Lz3Nkjoa25G7zwJkKdmshfpVsgKpThJbVH47DkzoABo5ToRXs3Pk2vjZggQ",
  "key12": "MHbw3pScHRLESSSF9P8J4nYHhfDXrEcD6V9DgUyYe98kSgsP9tVH1SV5C58rtezgyi7j8x7zWst6NCuYTjZLWjt",
  "key13": "5gSPpsCYgDgbMrTQHqR2PcUyfhCgpiE9vN1421s7fYoyFE98FgDQXfX2H9KC6rSjWousuaqgkKds6DEuXPTLQmX6",
  "key14": "4QTjKtCXPj54YFCLtHLf6XF7fHnKSsz5bfDJX36kBuT5BMfupi1UBrJYMCkbPXJVyb4uDanpczuL86eCbq5qHWYB",
  "key15": "38TFXh6aZ7XsrrjcmSXn5r8BVAzt1AWTT8uYFdz5VCt9ppwkt9BfYY7EPzHGnRC3jTJyJGx4tB8ZPq2zrq9kyApN",
  "key16": "3AeWSHTsf9Jcyzb4XfzWNkVFvDJwA8duJdExXodhSRvbqwrowWUjsKo8afnb5DBM9wWzx126Sp4Rvizimu6q5aLG",
  "key17": "35B4NBrP4RDcBPeoMThQm7T8R7Hkqjuos4orcnubiFvaQBAhNwwWvnLAUZ8nLS1G8uDj8GHJnzxbzfs5ADqpSyr",
  "key18": "4MShQ94FtfwJ3CaC11u6cJwKCXxhPozWACaQogbpWDrF4KrTC5rYMWoNVzAunKvPYoBpJExmi15Q8eRZ8Bbcgeg6",
  "key19": "5YLsyRxHBDV1UyUwS1RokpaUTXt5XDZ9fXwXz2dz9RHQbQvsuCdGZXcskXoSNgfWocpTYgpLYx8p7aYLgLX4iB9f",
  "key20": "3Pr9BqJ8aaqTqGC2kfeHDwpGe2DsspqE4CtnTXCWL48SoLa5LkXdhLo8SJR8mCWGTnRDumfFBNycmKbSjTCQc4m",
  "key21": "5Fi3b7fyqSN4e47mEa55SX4o9j29eb6gdfMXgpywp8F9n3TasvoxQDd1PaXEecB7VkMgNSECCqppxL3JN2CwomuB",
  "key22": "5pyYK5eTmGXVRPQKa6vga3zPXWu1D8mZFrLch1F1G5KnPDpjqBituyBQUKzYHCXKyeU7J1jzsZYmByC15u1xQfUG",
  "key23": "5MwKVq13hEfnfCazY25iWuJyH3ibbzfAqiSRuNkBtfEGEqRg4dSXmpbk87BYrumvpjk7SW89FPULJkQ54FF6bNhK",
  "key24": "5ZZ1z4cuEgPRr1Wuyc8N4Wsit5xKwx6g6F3BgSxHkRu4gAPjd7Hs79sD9GcZSLJK5UpdsqhbqEWFQw1RxDjJLSiv",
  "key25": "GC8hhQFGUj5q3WksiHj9kwEU2GbuRikSHFCSLnhivKBEsCKU1iqA7uSHFT4CYvai5nZoxbQkYS89WjZRjDRLDjV",
  "key26": "66dTALm2j874r44uSavS4gXKWddtZQvT4bVpx7y5Js9abfG2AmnKtqoc4XMGZn3czvmU1wNew8y6bHCx4h3mS5EB",
  "key27": "XmDP5qWTfVueYSXRPEfHi2T8czNN4XZNrFdcbtWzNSj93YLt6bHrxX4TQsXLyV89uzmBy6geK2UPkPv1r4zAAUb",
  "key28": "tReVVgBzDyD4sbAZ1C5YGDicqdQW3UBF9ko4oVAeKQtngMg67pTVParCVqabQHhLRfgkAqBRdRNotJsg5ZvSFTA",
  "key29": "3VS9HXcW8q6DYqhUXHwTvaKeeJwFX7NJXZ1ifm9GULChCbDmTpTa7Z5qypvdixxgC6eepSYSzrPik4wL2fuxTV6F",
  "key30": "2NvU2Re5sxqnFJniw2sdzCwJJF7UqWSNdhqEMLnLvqdn7oa7jBbaefVVtkGj2T5wS14W2NK1LQDQpGYgRoGiA4Es",
  "key31": "4wnpt2FiqK7DhXG6yuxoE6TVREY5dyKnGi4bD3CM5FHjkom213FK3JezdYBoumTvbMw2RMcNeroXtFhd9BsTTp2w",
  "key32": "3NkwduaZs5wWmbMWMy1jztU1wVGT4n43HZ5PT7zjMkyZkiN39GTN3A4oAGBG8743MhUitz5zz7RHNf3FWmmf2zKJ"
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
