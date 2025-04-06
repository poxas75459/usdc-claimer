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
    "2wrtVtjBu2jSP5SD9yrn5FTXMJgxXbwmaPqdquVEXpD9LoQwd5QogkEhx3fg275Uy4USfABp7U83GxQFZcrj9Vwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjAAztrz4PKFZV414YXjFmTppt5YvS2iysonGiEfF97ERD18Ps2dcXoGGyqzDAemQ5UWSgarccVbRbhuhVKgaC3",
  "key1": "W3CxhyX1qs6BbJ9UdX54cMm7PwNZFGuc8prqTjq3MW2XcRWyBkHehMV7sDcpkwG7UTqzBWXnZ6Jruou13AZFjz1",
  "key2": "3PuiUbhWZx2pKRoBEagYES9HqefF4qVYa5ACYtWS9BJPeqGyhxtfra1jHz9QPKmkZzXmpWYEB89rWHtxefYkSLAg",
  "key3": "5sbsVrs89GZdAJ2Lc2MxB2DgS8uspF2HfSxrvab6Spi3MeV5BSVXac8QfinnKUQT9PtZFLWqFSKBp5skiuqCRrpz",
  "key4": "vpXjyE8aHoDNWNPsRE6dfNuQctiJjPcRXjqxughfPvLy9JtXmYZtAuKj6peWm2Rn2zpe5SygfoimDi6UZ9ZMHdu",
  "key5": "Dqjh3QmvgbfUufgdUCoKoD7WkFTwXEDEFm5bMpLEFekWMwNsYED4sXjP6VFKd9as6Ffwwk9iy3876HojZbmSipf",
  "key6": "Y6BZXm46WVmikMVVgPq25xvu1uDPwDh4yP8whEFbXrb8gBrKvbwq5NT5JF4kFEVGj7WH1MhBZ7SmAiDLKJ9pfNJ",
  "key7": "2rabZeRmbtFmNHpReiAyiDjSVjiXiVKNXUHaF5ngHj4bDMv8ePMqz6LNa74i7Jy7BeHJ8oJrCdVdXJcLDKnkCLr3",
  "key8": "4k8EUJ9F7vgTfWvZrhfRBmtZRM8beAGJHMALvVXeesEWm63Qew5dLEcebu5qWiMAXk6TWJ5zUbR7JFYMuvGHs38t",
  "key9": "41JC4R1N1qUkUP2mFoJumFf9aavGeNnX9TjR2L2R3pCsBXBizChRsTW7phK521wuLJXwuLTNLSSNZu4brb6L7DfX",
  "key10": "4gP7TrnSWwzVW6rnydGHkkk5hdgy4n2eAaFzYmQbqKcnq7p1mMHtbP2bLHQgAXHFr7duW1kqCZY2gaS1Pg6pVABq",
  "key11": "3eUJK9Ru57L7Xi47chMacYo6KbVgtDvLHBNHXPdkiQbhwEKpsL6qUhaSvvpyQyUi7BJmQLGec7Si2NUftxLHonbW",
  "key12": "2CryTL3wYuPL9raboFSEeaCuQowp1ioXmocLxSR3idacwvYVMAD4yq5spX5Qi3A9DLcLtbm8ipJwAdppGsWxdr24",
  "key13": "2dDQQCUHL5Mt919SnTwSMTMzj83x94Lk7AWEkjsx6wuDnkw9SEXLeC5CAuaHgyYEj5QWdoqCdGnroQLASJz1QnVa",
  "key14": "5arw9jGon278fTUYZfUFVG4mg4nQrcd8pR9MF4iRKBabnfnYzyGgr19Fev1cJn6CYQz3ePXP68FB18JGtt35uUCq",
  "key15": "3r46DBYQEb4x93AptPJ899SifVLAsRhL9i9ag2N3hjWVWVUWNWrrWL2uNYE6bgqiSXQ5tp7x1GZ6Ux2egV5ctFst",
  "key16": "QGi8QxwXMKzomTGLsQBZVXmeNsLPB5VYD8G3Qiz5mDUWmh9Jrve7eqoGmFgzTA9uy3CHhKQyBj1nJyCpaNQLurs",
  "key17": "4uht5g1J6R8wzfJAXPyCf1dpLkBuoT1YGxUxZVWYcnouesosTvKsurh44YND5VEm8QnGLrCWz7nyZddAp9AztzUy",
  "key18": "4QAQeG7JTuzzhhk1hXvYYi4ugzmj7d2UMDJxvVfA93cTUDh22jkgmpWWRy1K8jHh5rc1ArRNiXj5CQQ4jwM6wkKE",
  "key19": "BVwf5KXBc6FqBRBujFDMnduXTxDrQJgXqN2rHLbhqwM9qkipz2v5Tqs5QuzTLTTCuUDLoxJZy9E7CESTNwcsf3e",
  "key20": "ws8s9V9xgbvF1ULSrngmXKVRKbCFZVR4VepzdXFaggXNi4wUBL8ZV95k46P9v5U5EUd2Bdn4sRGWVf1WQbi3Hou",
  "key21": "4e5uBrmqSRk6gZaD5yve22eUinq9ZSwHaxmGyWwuG1zKKbEYCN5H3mPVaLyZjr2aUCUWxSTP1Sn7WGpJjPEZU8ts",
  "key22": "5zaQWQ4BXv5KtA7bVDmBeLwfZvostwgABaaLavkc3dGLSxXYQnM9v3SXo3mfbcGe9MbeaNGnoC7jChfrdBZ6BGxB",
  "key23": "2xutWKtpGj8Vdndp2sjVPQL6aFBP8Ho3HG3kJQWNSCKxp6vMWche6NLhSLWrnteQde9vdPawAVMNEHk6D8DXD2Se",
  "key24": "4K572mTgSVU26je6nsQvtsdvsveTpawyPrrPZUUFchh3JxSjmFChfGuk2ik8rrh7hGYL5fpVv4qQ1SFdcNeHnQXK",
  "key25": "vxPf7ot324w5DsCZTucUtSp11cmUwFrD64DKvFnMqS9quaZUhAAthCbddLHUUPcDvVKbnCRjFeuzW2kZkLpzM7o",
  "key26": "5d38q6h8jzUV5hzD1eeAQ3rEXTPNNgNtHKbdV3R5errCmhCLEFPcsBTNMpebZFCchaenpRP3ua9SUARJAmvUz7Yy",
  "key27": "25cptadCLm8x2oaMHBf1brW8jnJstm7LySQRt21qAou3WozcSrnBBrtXHqnEvEtierab2Fv9mSU1UdunSaWMWBpe"
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
