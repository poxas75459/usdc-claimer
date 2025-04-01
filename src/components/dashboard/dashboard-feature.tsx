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
    "38Bx6LS79ccRKAvyyJHTCzg2MTQGyiwRwBc25bBj9mXeaxjzdut4dvtphki4WAGpXoA1xi16yqejoPNqiYnJBnzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gRcpQRMATyqNmcWGMNH5XQc6eqkPKZdS3gwbE2Rd7vvH3AZUasZMEKVir2NnJuC4cqNU3gWgqyd8S5SvMv9ACE",
  "key1": "4CGaNpKop1UUUTbBEFj15MajHzgN1qKH2KBaiKVMPvXa1B26HJVP8tgM3fgmX3Cn8BwToz5YdND5krSWt4TP3zDU",
  "key2": "3sjp7viH4efoEobgFMobvLVfCRodNsvoHs5EM1r7rKH3MJekHykSKe6gSAyFf5qhAFpQ1jDHUrMFcKQTSLfXULgU",
  "key3": "5nMqS2i6a3xt8zXbLmBnKS5wdKNHj83xYp5gixXxj7fRrk1LjvCSU9wiMNhWKPP8DJHsdy1x314Wb7aMHzzCuf7",
  "key4": "2JCBg6dY9kHHXSsQRZRVSNgvRauNtFHmLb5p6xKsJCmruGJZw6bkUjth6ofMkPzz612mnnH1Yddr1M3CgRNLLqR7",
  "key5": "2SUdbTwaAhtj4vfybuWRcSXyh5MPSn3sbnLy65pxvDfm9e2ELtR6bG8KtNs5j3fAYwRwpNtinZ6BD4AqnxyuLwdA",
  "key6": "5ZGTSLVkK2TCUNbAQtUfUfJJFK2vZuSySUZDDa2RXWUN4GgY5piwin1RhBQzwEybfMWgybT7YmfUq4oGJdVg5NmB",
  "key7": "3DZpez5MCz9Tap6Qaa3jbfpGvUTke1N7erjVyNzXSHRvX1t2YMkiYvq1teKGZ1uYmxpsevJTU8uo2ZrwTyiUys8t",
  "key8": "3sNnPWHVgLVB2vRHHP1jSzHrShNjfn4vT1G5TdhKwgwjgtyqxAw5AJeoLP5t96CkijN1kFMamBAwSHTBbTd9rSs7",
  "key9": "2Z685LgJMBieBTBCJfgikcGBxmf972TgNcgQ9f3vL99NVYBXUYpsA547zMWHBihYYRkq4YoiH8ojx5fcUR92xvf2",
  "key10": "31rBG48pNSEzXZW9dnjakr8FDpU6eEUpxd92Z2EaQD9K8jVeJMEeR5SGaVn3qLMB7JKZDvx5UsnaQFqHakxEuiRx",
  "key11": "4HXC52Ae9sYFhzWCLE1egFH1pcuA3w72zsSd7QfqVchpANjfyQr9oBXFG8waYABtwgpgW2aC4j2bk5ABCr8XF2p3",
  "key12": "3xq44oWvpzt1RRHE1LDhchvfFAMtUBEnzmcGZYqRWjWH8UdU1dNFwLfjtfdJN3kCUnqonvoL5ikz2rbJt7LTv8p1",
  "key13": "66WeJPSNLR51beN4962fGC4KmXYSW7W4KQ8yr5G4CHyMAvb33VMKmjnox6gqA2RgrV4hGXFgkgzZhfwL5Lq5pKRL",
  "key14": "piGBwwDD1PVsGvgdq777M6w2vhQqjVxXqgKZrfupMP6BxFSuBCxNCDhSFbFNvkhywYXWzc9SZ7drZW7WbP6kuia",
  "key15": "TzJcVef5Cxo8sAKrKgTHwNeaKMG2rD3YJPYyZ6taDcG6vMjT5A3w6QnKPrhueWHdUP8WRhcqEiHYJW8qvBwERna",
  "key16": "ELDckfajTnanySXMd7EUMH471bWvWKmydLajYqKKxySv3SUeXdgY5oYXNL4g3xSVg1pgXTxmFHXqinmUBxyoX9X",
  "key17": "LqTSjRjRQHMe5CUuwJEH4pnz5kbmE15wb8KDP6siGfUEN7bXFhPQAXHAnZHcV5NbhHwgatMwytiBSFX8hvm5xn2",
  "key18": "rmtkXKEuhV9FpKQZP5DZ9QDn9TxWa98ELeERHwS5bXqxgr8eAjtQfWhVGiupg9nuvyzxq6575WR7GAaFhPPzBQZ",
  "key19": "4vES3DGzW4NFzRaeYPT11xzet8LhBTFjVUJYQLGxgEzv9V3oUj2E5xBB69JfdYB9FXeeXA1PfJcVi29h5ZBAEUWw",
  "key20": "2Vv7mPUnyuTCJJyNZLt3ZhbxyWCcprD7u8WBjWewfXtVHV9Dk4v1yakRfVyNxfr8xecBTCd55WrrQi8V69khPkQs",
  "key21": "hRJRxizfhhcQ5PP5SJxJiknmyaw2TZu92rEcgEFLgh48Ete4dTaCMj4sf9j4kvkJ2pnvwzWpLS9C2TBQ6dyQTuA",
  "key22": "23xjWw5CSuLSfA7X4oZ2Hug9kwPNJ16oESSQRcsPqSHpuKJ8Kxk77ZCAkXWRDH4gfjAqJt3GRJ7WXzXPjVXe4ke9",
  "key23": "63gomvTPYrajBb8W3w6LvTA8eDbC9FZrpNdUJugfX2WtVYWWoqHVfFWvqyQMVbqJXKq7JiH3S88BBYw5JdxWytU6",
  "key24": "5BoF9hu68uGfij84bqssQL8QWg3JyZdgKoDPEXP3Nd5gnmYny3cvpQNfXoUJE1kkULsH6aDPb2jUsm6DFCxaiQaF",
  "key25": "4454E1Xr9rFkxVwfBTiF4N1woiUxNu5QAx7GH1xZrZfQkajHv5G4W4NJz2fTeYLqbuqPVqDJ7h8uLgXiTinsBf6h",
  "key26": "5mNcCKHQrAuJ8ztERz5gMoYpVWSx4nCSzxmeXAWykmXtU7bwehR5YSwLnYuQE8SWZEF2B9wSBxp6GBWhrKBTaMc9",
  "key27": "4qX8dsQT6gi1Z4SUs46vnWaMwjipWVjxBEncwxYt9bbboPJiWqR4aaZsgoPmUq2StEmaN3BbFjwqgW74poKocBWQ"
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
