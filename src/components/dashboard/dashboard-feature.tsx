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
    "MvfSJVy2qJSYPwtcoPyaEeeE8E8pCUEyaiEBsxp5QLxG1CZJmJB5kXUMnoCHZ5DZhvhJ51DBJcBDDbQX6nfWrZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UyjGAe2iakR8FuwfnCVUSw19hTCkj5iijtiMZdzTHVir42W6PmNawHZHCNNYoMqyuBYd5Wjz224cPeT8h6y4qBF",
  "key1": "53A553VaJwhpZUu5K7r5sTJkFowxQtAfjRBjnymaXnVW9cmEm4CAZAMNemLq4FjiNnPxKdeyZXKjhd4jMRGyD4W2",
  "key2": "2ETRVAtPt6YXKtLUZERW4Zyn5LC2d44FgWL6c9ygJmNLfHksFD6JNkatzELBZ1NHJVBPivZ4DgfJaG4dwQeRdyS3",
  "key3": "427hKZKQMKVnndoBsoYXf9meazvyy6ksGjgSzGmGxZm32w7UzhQhs1JAcczyH7SPqr2NiVhruACkJxa7JtZWkN1p",
  "key4": "yeWK9uSRfEqqztXPrEmPhLFLSpfC2CfhfaJiSKJs5k6ro35QY1j4iX5rYw42cdJCpxfK26fnkmBBxMbLbzRqbFz",
  "key5": "4XorXsHbY2w2R2wkeEradGxwWKnP8PRMUxpQ3NgGkKbYm5adc9WMQcdn2j8uFePvpdceJVxjxzrLmge98UH7mjL5",
  "key6": "2xevbPfQtt14k24gtpkJ5EibmUriDDgnBafQqrZ5fLFmveZbU4JsASb1cMaxVY68kvQzFR8tQYJvThKdqQQkP55T",
  "key7": "69kRbbNSTysWbUF2MaWYYfEoK54Sm9Aso6ssxoEyvzvFNgkBFVAfbYX92rBb1MimPvzdr3WvzycyM7x5UVo23zm",
  "key8": "5cW82AJ6NKtRjUP9QNc8S81wQDKCaVyvkcxxaseLVnDHAHVEJBHh8eeYjFexWVcC41F78chLyzSXgbzab8scdzMY",
  "key9": "31GKxqshFMd63puv26nsKYyMVfRVtv8yx3nD7QU5sYGzgWM41Ao6XtrZQXVPpBqZrDvv77qfyqZizbFDUjij3DDy",
  "key10": "5okkrTmKoEvihhNTrszkYQfC8iv6rzdjQ5JeCF8bv5FVL5yKZSdWj2A25vMSCy359FBy4YKgfYUXvXS66EQXsnku",
  "key11": "4oAsMdtGRnWHRebMmTAsb8oLJEiURbgxV6P1PTKUDw5mY3aEAoHbg52h4887FMBKh118Ba79hgv7yfb9JE4Bk2yQ",
  "key12": "2DVoAco7rcUnQArn458huk3KVDvNaKpMa6q5T2NU61yfx2yRoMegpLh4A87gpfSbpfJJ28YJBBooskErKVzWkr2W",
  "key13": "5uAWqt5sRWzreR4UnuXGXkc28Bcajb1TmeriRwVg82xkNdLeZHTU1jDo7QQLrccJrjiux6ZFaCmd4ipAH3DpfKng",
  "key14": "4SHdQjSvttSCvz94Fk2Wbpj8dzXqH1kpvMyxS72uSVfkqtgUinvqJLG4mpqsLZjZ126sFra8ZsKEaTwMVQyJmetN",
  "key15": "5u6Fp9nyyWoZRxv52r1VFaGtsdEkcTutCspzhwcjmob1wFrrdMQNNxgbBViEFtCCDwpAmuectAUFVLx8ZDeBbVSY",
  "key16": "3Efdarn5CNMttPfJaqosGNrC3LhppJpqigSJUW3jMin5XzeqJeSqnVEMfa9S3umdeSLnGjiQEAjiicf4uFyn8gPj",
  "key17": "3pAb8dZfAKnjnYuequMdC3ELruSag1LEtULdkK4U1h4Ghk3TZvsbiFmF4ptqyCas93q7wPSoNbci4kBoVDX4aPmi",
  "key18": "5V4earzCbYd3gAwjbtYtsNFaE1EKd1uPHXKfZHpH498Wmf5bBUCtT87XwuhDQejAoa6nbWSp7Kk2jUnzrceet1Qz",
  "key19": "637ZUw7YgRZ3FfsW69BZ5YFGuqLTPk5dViYJzaw6U29guC56kp6cnoAZd6HnkZd6zgrvtMK17CC6HeU4TTBEUREa",
  "key20": "b2ugwhSgkkaSrTvRaX43Gv2yeyweG7fnBuS77MQ4J39ewu92C9Jetb5jM16k16HvA8gcVFx6jWHzeFaaFkJjtoC",
  "key21": "RbAYaGodYEjWehs2M1R1bCEH18zPvqE967j1fZKcWGCrBdErtQouJKkjWH8VbSwQmuMsha84yQLF4xct9pSSFDG",
  "key22": "2agLwasFdzyrjZmwWptcKH2bKnqUPbSQ2ucoCD9EWjwvLpuKaP7WdEvGHP7eFoF5dP97jF873bhPFxjyGbDVxyW5",
  "key23": "5JbA6Ln1FbQvpDLqYYof1Q9y2jgtm4J2JjfsVLdMJvQJRNKDRZMU55vxLiTMBtXBJ44b7fHwPqH6ZcdjvawxxRF5",
  "key24": "53xhwADZY9MjchTy2EzURwCZWgrYBTnqsxEekE7vwhpVsEeCVJDqco1YoDBVyUG4y1NW74sn7RWVssAyAn7M9C78"
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
