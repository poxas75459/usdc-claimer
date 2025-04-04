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
    "214ig7PeukprJJjbh6qgg99egGyphmACdgjqsHbjCCnqTg7WjpR4dszRZ1dbbdsbn3o8Dp2GrYYeHTnHR32bSUvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHGugTxci4gdKCNAYoKYxVrKtQMdrz7DhLeHJhTXp2z6oGM43sQWj9jM1xvBfvEb7gYWNpBV4b5RGnr1NbeGd19",
  "key1": "2qB9EjoRhkM1HZJeev8wuh7NdSjpk74vjpffZSukhhaVqLy2vd4X6T3FAR2mY7b8qR6PQqB5hb9WKMZ4ck7iKkzo",
  "key2": "2nsZ42R6iM1rJqqdy4FosjM5U8df8RyNJL7hSaxFP9EXRiamJy6WATDCYXoRiLTyUoy1TMME1FVoAmVuEQHNmQdd",
  "key3": "4eXvhLhhRMsofpVNkCdqBRERLvT6obVxK4eiGe6tqY3pg8hVwMMVcDniGEEHro2TgSZVjB7kiDSEP8TtmSn2ztKh",
  "key4": "2VwkTrdBtbQ3yqBPmJyfy8kfUsQtSgLJnf56yScFuXJx6fdYbQafmekWzVKXhGRar8by8Pn69JJPuhCmDtHijmXq",
  "key5": "54EYcUyKwsYtze2qMXSWmrBs9zdWbV9mqW9frMhDaiwrmCXCQr78bewnQn1ZaagsGQxp3z6bYzHLxVZYoPwVXkCQ",
  "key6": "3tjubYRWfJoYM9bL5KZsXkuWYq9mCf7PgE93CrwWKiJXiuRobTk3NPPRSURJuqi8EDKkzgWtazpRRNeYxWPZZXfi",
  "key7": "4mJQby16nV43FanKDGXZimTitGafabigRbeEcEo8ARrpiuFBdUELD2bMTcqThV5cT5SMVS4z2oFkKZRJGMMALAHU",
  "key8": "6XWs479BTVntTKQWacy6jwBMQaswQs9JgjpVSgDyorVCB1sCdnuFjR8potavSz4TvmZd2mpHQf4cHUCmN7SoynN",
  "key9": "VrSBVaUUtaE7WaxYdar424dN7x2EqSkJ4XvA3XZ6Ss3Un2zp5MAvbA5mWGWRv7o7Jm5oHjNyVW2gepWCz98Sgm7",
  "key10": "4EjLQvPpL2HCdNH9z85vjSt3BvY7yzB183hb4psqQwdhf7qcCffY4jny7YiXy1EznCPPsxLqQUP6mFNB4KHzNgjR",
  "key11": "sB4MMGD7jhZK6cGQq5wHY3nfGwrsKUepTsjAfB3EipfiKLyUoEXiydx2gd8meLZ4Ub592gefvRRLYWSUsRFJZrB",
  "key12": "xWru468g8N3WzBbYQuko3TduFC5uDhFS3mWSzdpd7apEnmRmokFKqJMQUJugYBbJCLbFcGsCbMcuFDbj2uAo4Wv",
  "key13": "27hA2VnbaRCDqF4ezBGUG7QYNC5VHea9kFzDBetazajquNzN3RLZYuq2MkgBDQhUVZcch3NNQYpkC4NqJbM1KwKk",
  "key14": "3iKpkVdWvQjMKMD2Wuynd3obBnVaaQVyRZ1Bw5LrCnVrkHQk9HxD9dKa1pvywaRChhDFf96vQNEXAHybxy2NtfbM",
  "key15": "5nsjhDhZCcNGvtCjs4FVfn3PiuE5PGMpX48KatQATNT3txAJVkX5VkzWFhUc3opVJZzz98cjcUZ8nxNYRdczsRKC",
  "key16": "K2pDPnqaaSt8wncdZMJw9b6qAmHQe3aEiFiUsSn94N8MbVepjvyDMUDFWp3Tujrc9dHqZ1w1S9BR7B19DyaGvGv",
  "key17": "3P6bZW9awFaZpzKz6KxVCBDgpQME2wNkpjk5UD4v2PBGMjdvFPMSfzmJZ1VdBBmVuS5sAUB9sNKT4SYFjs3hmsPZ",
  "key18": "3exVPAzuhEEJ4P8PWZwG9UpvourmqDJTgPVoLQsMGY842woWfekvwFeVfm6jBt7twdUFGKvSeEqjQzswe33bQHa5",
  "key19": "5VUHxrEDgSPznjNAFejs2eezaNoYf7Vx1sqwTk7k4yWTP5Fjqo21bNVGf257d2k3MSVTVoDCa2Zn7gKA15Tfs3nj",
  "key20": "H7Ew4ZVbtuWcbdUGcwudL5scWPCFeE4xDXVw2s2znKPtnd9c6PTCHfisU5292TWyLntNK686mzzDmq8c1VFmwSX",
  "key21": "4EhR9V9BMASKiLvGFjJB2Kiv4EpR1CshEmovcy4FpodXVptRZsCQYPerfytjvDT1H2ApCxBVkaJPvQ3RDUSMijQd",
  "key22": "4B1QLq44eqZLNmU5w8sJKaRL2bhJJbsKBw5ZgpvEvBamD8V9qiAn6ukD5DGiixx3k6cXDfhA9bhNXVhfh8Vt9CAt",
  "key23": "3ZbrSRmQkmozHi39Xwvu7cSJCCDqPTnQa7Z4AozRQ92MzgJV3FcXDKhBzD3Mfx1WgigG9D8dSTdmptmb7ug2FwaL",
  "key24": "4LQBxBZrej6Yuv3LJ2SCCaz2UjkdZgqk7wmdrHqAdMDymFceYBtS2JfU1gPGSzwjdMM2xkFSU36wnXPeQa2nc9xE"
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
