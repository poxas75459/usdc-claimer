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
    "5wha9FF8UE6b5oKSL3EAwisPf3rnHFF9mkPrVHva4hbtMnG1ezEXM8xD5pwDYCewpeXGm1B33HjfPbTETVM37Rsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5DgygnHeXc7W4mwgvAxAomBp3CT3GQhTuHqdut97QJrzbTDMWEMZNH7LBeCu9feU6wfX6LYtUbyb4ArvhJs5DQ",
  "key1": "45LhoiKxqTf5RpQjrGvsJbvToGFhoKHEkAseXpEduzWnomyF8Pf3GdWY2XC3JDgUbtZUcDDHu1C4WeL5cy4XGLiL",
  "key2": "4om9bR4NZbSmL8UrC3jjHNkQnWzowJGvDifaZsL4tAaLWU57qVRZzjqokmicWQWs9ivvXcYRtzK5gyM4dyxkrAe4",
  "key3": "5U59LeJerKtCF4f3vxDhJy6QX9oZ2SupgKDQuF2dq9ipsiK4hoJp6CnmPd8Gobv3Z3GtuxqDiKyDayChWPV6UyCk",
  "key4": "b8H8dYXNUooxmLoYNBPCStVouj6LjKXHZfb9eFFC2zQG8dzAGe5xtDPRYRLcDF6DZPfddD2m8EnweQqjenXSgPG",
  "key5": "4V5d7rbRzpePp9mGQY7UWaPfc3Jni1f5Uxy1MvvLbkQh5DQfUgxJcJYjU7Dqdid7zhBZ9gT1rsDLxGkXKV34ih7T",
  "key6": "52mMoBqTV1zmdNrLiCDiU2SE49ozU7U3Si4Bw1Ev9evPVM9DSYxZfLwQibyqV84Zeo98DsvNDGv4wD4NBEL7MJMg",
  "key7": "xAPUrgfTrj2U6d4scfNXMdJmen5KVQgfyYzzD63SXq93D9yCxJrmfRdRvcB2VwshRcJFUNZstQFASpW4rpRk822",
  "key8": "5rSuj93Y6KqQ3Ud78kw88VmPJ7CQpfEK4N1ZMyU4xVxbpHHsQhK5efCE1yssvEq1NFoGjjEoXtkdfdMUTKdAdSEW",
  "key9": "FJkpmUvVkoS4wqG1RFVusRUTaGNZgxNsntsR5ecz47dGjboUAK1n3faxNNXXCBGejevERUDFBRPWCDm7z6H7o3b",
  "key10": "sG7DA1h1eVhCj4UTPXbSvDTtbPMKCrbQHJ2Tx4zcEg7vNAnzNzYWiEYmPWT2gPskPtEPcXgZLuahbaJMRKezdzg",
  "key11": "2t85Cs97vsHbKzmwD5E2V285mm5NrvVh88QvED8i1WgxtBAbPAcwPqkLqhwob4et9P1GWwC7PWr7TDzwkB8vjph7",
  "key12": "5C15WiK3ifexFjSs33TgAQLi2mTPFaUnFQHN3z3K4giyrkLiZq4SxehDQiJMBRMnVoEq7yQkjHkbrBb65FRVEhDn",
  "key13": "3W2BhPv6yYbyUjeqqnVLe6yG5svWynkkXogMNWT6pC4bpCTBY6hHso3VdTtziqg7wWF929MmkmSaDxMT99uCrVDs",
  "key14": "5oZNbx2J4yEq1DpvbJ9vKtftrAyagaAg9HPusyumoaPSASCv8or1v6WwBK2tjzmsGWQaEGTYsRwPbqPYoiiW8vuz",
  "key15": "5kMnUdfLMLw6JuyiHHAz799fgHXSYS93YdzLq7UrajcQvLuT2Eqgup122WxNJpCabLwNrH4HmS3e3m1DsFwp6ZwJ",
  "key16": "3niWepysr835VACXYcm9T8QFtwUMYbFU6UxZa1tUHDs4Qekkiex3BPCG8Vr6nqkWeCtijia2sKrzCoVu76PBvVvM",
  "key17": "2JWBPdd6T1MeTUPgGPyEavoreq6NqqX287Ei5wPhT3vTSr16de7JqeghRvpjwde1J7xiCu5KmdUQReTXw8Yd9qD2",
  "key18": "4hYHc8cnB7omfhoToE7ksDA5jshW7rHq9W3ZpN1ythHGv7SVswzYW8EJY5PwoxuGq7QmXsfW3iAPbe2tHWsFj7Ww",
  "key19": "5up4pLsoxwrFSVnDphJTVYtucEmMtAWiGw1c4sqiiEvJTAyYjjC1R9Xy6eLWenguS5YwpPWmsdHhCj8pp6maqypZ",
  "key20": "3o51k3yEfecYuQmxSH7mJgxJRjBy8hMd43JpYKHUe5sedkZjjr3KA8372eTpZBmJA21TPEa4wQ8xS8PaTkmw1keg",
  "key21": "4xVxHTKMxmN8uKeEVWExZWZnGwshWUQ2G7wfRAhAXg2eViciRARHC2RNvmEwKgpHaU7smMdcENdF4mf8pHso8TGK",
  "key22": "5igbuWzog2UptkGofq1UcSdL2mjSVR6HCgwLJEYWKAhvtnPJNsYWSucxJYLzUGTs7e3kpeKjJdWL5LUHgHCWpbDq",
  "key23": "4QDyrDV1hdWr6am3jWL125wiMNeM9E5FJf5YGPwqwYapWMdUCkKaZEBfk9PFudAt2bCVRphdDNAaaU7VF1RhVLNN",
  "key24": "4RimC2QLXT5BqxLj73R5bnEx5utVJNyLrwfT9JUoFYoKG45EebF8kvzbyhdG3X3k3Y7pkTKijpRwKAGGZv1no9VQ",
  "key25": "2vQEUFeZ3AX79euR1ZzTysNzSyajSQz6udNucTLL54djNBvhoVSB57P8k3uHqKEy9QuRBYGUgzVnoREV6DcjQ43T"
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
