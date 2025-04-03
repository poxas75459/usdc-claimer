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
    "23KYxSpXST4Vvc4fhdQAsevRpyQChwQGviLKNapyFMDEUuCh4oUAPomccEGoJL2JuX89YLeFgq1gWhx4DbC3fJdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unuy8qNxMdp2XeoMARF8vGyYNgZTVjae4maxSkj5nxwtYkryPjKfePJ1fWpgWd6DdcN2pJvqR576sSLHNUzpu2o",
  "key1": "4GVXFS4GrazfWCpSP6jU6yVtbGRjvCPL3JmCLCEYdMZWawpUUemSEYKwFdsRXFaMQFvXaNs3adSPqX6qYUQUzkxW",
  "key2": "4yRXcBf9hy9BxokdYnzV8jmXRENTxZ9ZVzkn8YhGiqDaah2RKsfSzdyi5TUSifXkm4GhPRcUqBu3xUAD3fPH6DsH",
  "key3": "5Sc81nDJSULDwr43d9pAgWL5MreD29uY4Yii86L5gAw8MCyTFvWoYEoCiFs8HA9AwoBhfg63b1mjLTFBnWEdsN2S",
  "key4": "2ckugYG4fkfQrJhAX6YxPPML1beQkzUJmRrLu1oBi7iy8ST77J5sVeyHXSu4kYWW9FfbaDeaXUVK4USXHxhRohBc",
  "key5": "3L4EUjQgeBPSkK6qUsqRPwXuxqMo94ZjNZs4nytrVfxMbt1wARAx1d7wMfbuNa6zKirJWKio5qcVQ4EpxfhaJrF9",
  "key6": "64C5r9ynQKe8BCxNsKEi7FzwEppv4kNG9M1z1apMV91RB3SBzhC4D3YRCBamNW9QUXj359wtvHsrxL4KNzpMbXQq",
  "key7": "3pQMpTtsDt29nh59BNLQHSU9NAb5fYZVfdvUz77QXD69YpseemqoCbGBQa9LXYmZ1a3Y2xL3tNbziurbrgEJtoam",
  "key8": "4hMHutyMBkVftwj3gzfTVtem4MGdtGv9Ms5EnMB8FJKszaXX1Kkjx3X7xLzqg9ptpaC4hAWAkMPNCoz6y55DKTVH",
  "key9": "3ZuLsKHE1T5q5fqpCvzJN4gtfCfqP6MbP391hJHkyrvheLYZ6BKv7yXHrWAFoReDZQQ2W4xUN54qRir5Ha6PVe7a",
  "key10": "4Xv2A7hneerkVtC36wkZasZPEFaUokSSR7eBsi9Qy6arzALvcVWiiFwbntmp6QF3fzVkNQizTV6VTacrvwBptLFK",
  "key11": "4UN2VCE6E1DumEBz6ZE8M4eGftWW7ycz2dQBPq5B9XybDdDAcpn8Z3Uqxwex9MRV35iZewQHEXAgF32KrdAUMMSH",
  "key12": "3jhvw2YLKHwhaJ92Jr1R8gNHQSSeebZsmaqHxPDdMWTJQn5gYSWkM5iZ2BQiEwnv9VEXdS2ewF2cfLnN9dH5FPqL",
  "key13": "3sb5adeUjnGkeUmf3pKDCnS7sYA5J6WfRmegxMrn3Q8cqH1BLWio4D3rDeY9Lj4BVPhwiD1rxg3J68jF9nCNpBKQ",
  "key14": "BUeQdzWqbKmexrnTFGnJ8MLLMpnGF2ZmKpEvZa3tVP9eSh7g8HFpNoCwDjSNt4f9rJPmVRrxvJ8KD6i87U3pbsc",
  "key15": "3grsVY7GVNntfkABZwp2tZKpns5y5AeWvKHEr6VS869Ne9ddDC27tBKLrcxegCnKyTRerYgVth4nxLoB531uiHeL",
  "key16": "8Vy4su4TRVKA7BA6DRvXQBKxmgSjbJbSECttaFPbSnzKDV9oe5xut6PE5fC6AUR7c7LBVAimfvoxyeBC3S2hjJV",
  "key17": "5hQhGF5i4MkSX7oRAVXwSV3RcgYsJh2JJ911k5cpSm9wRexkmxNBXqMKmcRVanroX17LafevjDETxyhaK9YMj1ou",
  "key18": "JdoNhwujP6JBuuQTLnxUqjNu6d6hwVHYARmTxo34ircT7f8dwucZvf27xyUHXD718YMdNnB1RVkBNFTRQ4RRh1p",
  "key19": "2ueHCZZQPy3icuZzq9ZDQ8QdvVntR3A3TPNtJ1LXK6acyUWHJmci8LsLoJ4A8NyorQNvzj7PisyBMwk6zXej4hbU",
  "key20": "5FBc8AMCkanhN9NLm3dLLijxJnWDcNJzdQjRh4T67up4UiHVkPbDdaCG1bZhkxqdtQ6R5tfe9SJjRSdGgM1zosTX",
  "key21": "2Whf1WpVNTS7NMXcBHuNpxhy6RL23NEyNGdAtKRgqD1TsRvin4eFVS2B8wyXhLTUSmMVCvuL62GnLDY2rs53wWdU",
  "key22": "5dxBVHf4QMRSyyd729xMNQS5ki5StbuVJ8EQMVQzMPrg1NXHNcLWHSBWLQXiBGpctFXPJPQyU9u4FQSqTXPYFjcW",
  "key23": "2kpBpHkytdJkLvsKASepPqxvwk2vGaZWw5GHPTreiLwFoo1kFeaFDGP22h8v7hXUa5qEUSrJcv44e8fD9poycz67",
  "key24": "2YhRFg1nxTSFpHqBXuVHLGA3fQnHmKtGaspQ3HuScFsgBpYF7iHLVc7k4UJkDneYVSisF7MGoxDZuauva3fq553u",
  "key25": "USeGBgmoLefUZ4Rkt3t72aj7XbgZv1hLTRYSZNtStN4YVcbcuHnpdGinpNEQfninNancLchaC2MSK1J3GEhEi38",
  "key26": "5WKtBesGNqMiGaD9CaApJciZdscreFRJ3k5eDXoWUvfW3PkiCMhvUNBC5DNpYEngcMWLDG3R93aeuYkc4jekVVCu"
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
