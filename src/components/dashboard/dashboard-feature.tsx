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
    "3ZTymf8pKbr5VFSFyt8XiCyiMt2hiP4Yd8JxXt3x2sGzvMqLJYJ8tKacY61AWsiZHYF7GzaJ9uV1EUo1F2c5dotX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DebBVGo7iAMXdb2rA84oEXqXJ9tQeJfhJhJfi9vfHd9nkXV2HBtNRDA7D2ZS8itbdVBdFzc7YDFiSNiXLdEVMSU",
  "key1": "iD93rXqcfJcLjU6oHdh483uF378LoT2SY9XKSVDYcj7FvzFpBDwsDLBJzjVz32EH5qGgX9ZKqkaR1qiNEYCiAVC",
  "key2": "4QTCpYeeevjPkvpPNATaTNMvusDyWGJ9fMWZMsR5C2HuVNojqQdxBmyMcp5YihpsU92sv13zPYnQvHQBN1hbWu6H",
  "key3": "5WTZc5N5FGvhmZTaffqAvJ8aTnKUJLaNEGEedDqx9pVKrDPVW3REMdnKjpHQ5eNrL6jf7PD4iouECEj3i5fvaFz2",
  "key4": "2T5qAzvTgTEMQtHk31LWPtAZrBpnXio4yx7EuPc8PT7Kf18EuJLcQLSB7jWCRSJaVPsqJhYXGGHMJnRds819iny7",
  "key5": "3cBAwvtGsARmVKEcT1ZAPLggNpMxrMBbRDXxeWVDiU9erjoV7mBvoxYCFu1hbhm4s99MsKdURRrV2MikXv81Wwiu",
  "key6": "4ru2Wzp5tXaoGRgFUD1sTpaJxWGvW3ep1AmqQ7Y2Nu4G3TsWVy7sBqNeatWyeDoRAKjFuE4vNid3fioNgHpWM2Yg",
  "key7": "3ofUPkSmstLqp8CLZr3pMPBGAdPab3YbtaToi1TQtUgC9eWczMMdwaQrS7xxbYuL3ZXACFH2vb7Tk8K6bCsdVdX9",
  "key8": "tW6XhpESvNN3H7BwCrrHwNjJtcx4uJabrav7FGUKohjVD928FrobuuamQ7RgaRnxyYCAUzmHAa9T2x3iYhuawD2",
  "key9": "36nkMYs6G1RZzyULkQqEjrd1GSzMJvPzmgr2vpz6FmMxrfBizLZ9pCuifxeoPdzGNdVy5WyMEeReQGdimxshmtLX",
  "key10": "GQhtxhyC2hthowuEZrxY8yQryZaEH2pqkRLHsZYqN4jw4yFzCGSbWcsmZFW2Vf9CumPuDGNKkgN4vrRU34rYvnF",
  "key11": "i7T7XPtH9NFJwUqgd7n9oLyEr9U9miLFg6QsdBuu8PFCWezqL8VP6H3NsQatLkoh7YMNz4JcMQa4GqGeMjX6aE9",
  "key12": "3sZtPsDPZWM7HiyMv7J6Q9Zc1N6GgR9VD182Y3eKVf9HbNznHHMUpZLPGMA3v1om3tS1XHbGFMz8u3gMSNAspQD1",
  "key13": "FwmvMdGyDffDG5DKjRoqgxtdcUXh6XnuuMqdH6AwPtoH5Rk3xuwjXrDyHuDM6ZNWdFR1nZg8tqPNf52XrrExCir",
  "key14": "3SsphXwii89q7C9EEf6Vir4ch4vs2vLELVewafFbQH6d3fq5FPC5m7REajEeJMP2xKttWae3mCaGbfPKrpR4SnRg",
  "key15": "2etiUb2W1ay1iVi6cohYEiJ9mARdzDz2Begi3y6jg5Hzfuw5g8WuyGfHx1fx313C99ACYZHivohnAD8hcax1bMcW",
  "key16": "2pe4EZPoUc2dyvJsjKmd6RJWvrUsVvvENajq4Mkvzf4FbT8dyKq9mYQoQM7eNdi4ZCzGkrptzJg911vVbVwSsZMv",
  "key17": "5s7a2eMAcqhXbbchfXx93A1uPkDS3NgmRZeHuHCXddAbVxVqkk9y9mHMDaACtuciKMZpc5odvKFjoMdtCiafwwx5",
  "key18": "3ZrEfuvYfLBEBTobokzdZn5vKaHBC37vvJ5jbcHQGp6jSEjYxc6yrKCffDqbC8BEwnLPzxi9U1d4WhkaPVUWjGFL",
  "key19": "gQimCZ8egT9ofiW4TfsgYQjsdgXrB3G4BvesLquavtPTRWADiKd9PZARjJfpLuaLWnVo2U4FFtDAteXuK6Gv1Vz",
  "key20": "2JBba35RhqWXGASp23bZGRiLwYVHEo5TP46VQypRCbsKPT3wRdpCLfdc7WPyA4tEi7BokVA8bvth5dQuwN2YA4rf",
  "key21": "66uiiy8Ve3Hc4nLo3VTNRU6AvX4kCtiYqb49UAcq2HJXsu71zsBLJjVnWibybMV3sBJXVHEu7tdoDX5EAZHCNgao",
  "key22": "3piiY92aSrJooz9jGNWrVof3wyuehfWjqWETgotGaRAcQcGmX5Ska8gfAUaJPtt5WTfMFEQjFc8JoywbLk7LJbF9",
  "key23": "66TuVfHKKN42SiVcHA4fU8tD96xiPfNyfq1HF7wjzYvELxcQcv8ra6uFz5t6U9hiyhXf9v8iFJVtV79prW24zNoT",
  "key24": "4Ano466ohfkZf2239171g8L2R9p5eh4RF2R1PaucFgVrNfngcdWGfEp5XMA7kofKXLpkSGQcDJWjUjLLVXjYHNSA",
  "key25": "2tmGAg2X3Gfg59oxtjpCLHbtCc5HaDZz7xFrovyusNT6NrSWG49jbDQoPfjUdEMTttKca1G6pU68infzyqTfteNe",
  "key26": "4mTn6ZxwbiAnFsJaGojSPvJhszSszsf2bu6dCVW1izBkQi9prTmX6ruiVc2R6Tw1dk9cnLMFePm7zAMSxEMWTrc5",
  "key27": "52DYDcACDGWJ95u2fJce8K18rSk6tnsE8RT3ezt9iXjGrj2YLFxfX1hnBPpj3sPi6SwbCNm54YNhmPyNPbLRdP62",
  "key28": "5vEceSLodx9jRTT2Vcdjyk8e2bCg2xcnTdrEBRpnjN7FHTHnuAwwmYXcwKtcdtPtvuDJR1D4qjDZMkHAEXaboyr5",
  "key29": "jmaJ3Az8b16PUX3DPSjLakvU7Z9cYiFwp7HWuuYjT4A9qisiT7ZrXr6T5NtRjhMymmWJWDa9ziXHGYHLsqgRtHi"
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
