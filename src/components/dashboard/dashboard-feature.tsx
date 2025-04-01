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
    "2ABzw928oKNkvyYWD1r4YNSNjrirgfzFhourddDQh3UPs5GTJKkAG8MsmfA2nuZ2qtLbivvBVoZWHeuDooTtBqV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJcc4kJ36ai37PmM5Vknqgg45f3Ux3eRACBtdRTMnmqUzzkxwoP4Xs6wfNcQXVzX9p9ZwZ7QPFmZUeChqCD1q9J",
  "key1": "9bskNjCtNZrNa1F98cjsUiJUGzdhCB2wNZMZgQpQkbdjNxwQAnQ4gB6FWqtDeKa5Q789ftezukVqJfFvCD2QPDi",
  "key2": "2xd2N9nqZm5gMdJdHoYEiCiW74mGxWfYtD2mue6MqNs4n7nam6HKWVVUKBV6yNZ2Cqjgg4Uj9MiKU26Wqdqh3rAo",
  "key3": "51fmMzmFwcXXEf31tT3Z8zUptevZSTnHpHCCNWa3eBQqup83wkvQF3QFqMnxfGL5odqQQZVPtnsWmTcbcTDrVziZ",
  "key4": "5h5BuiZtaZeLXwTs7NdSjLqqUEmZMT2zBbjadHFdcqzP3KAXwEvQUySdASaUE1ipN2WhiS5VsvNh9xqtAkek9Tfu",
  "key5": "5HHmAvMFQWd9JH5ZnzoNRHVTBAr4RSHYcpg1pSivaV9ye2ca5tf9UHNumPpRHiAZfs3nFx7oJPRXu5E62RJqXunC",
  "key6": "2Y2hCyPcWyS9CYk65Ui4omxWCy1mWQudTGr1EHDoxL9nXtsLZkiH9qu1TbiyCoZbZcF4GRgcPdB2siQr2XWySkwt",
  "key7": "4iEtpds61kJkUmDKcvn3UXFF5cQLMWA6evnhqC7cn8bDEBUuMfMHgPwWsf3TPmMeAx1GzXzthxa2uKCFLoCD8m6t",
  "key8": "9gYeKRBrSEiKbTLJy94EkwnBRPNfhbEL3gtWYq6h8SDBqW7erdC3gRTsRJrtVfjJnXaYdSvJ6ZoUrXz93icAebL",
  "key9": "3Wge5zSEPpw4PByHnggse638Hvy8vBeLL6hymVnWfUxQbTFRFxWMKZ2BBxNdPxzfbEKmVsiTs9aEHAzb8N1ZJpRX",
  "key10": "3hzRMuhDxQUkNwiPhA8us4dDWMZtZvWmmg3pD8w9gmMq6KGT5cR3vAZaDmCqy4hWhPubyX229gUZVeD47fJmeTvV",
  "key11": "3QE9zrLeHCA3GDApntcaTH58TDQtih8CfdTSSQVGQoooM3gWHZgUhazV9JqkJxxuaeTcR95YRyPHPpdgA6P59Tb9",
  "key12": "5dSsnh1qqQJqQd2NFtorhAM7yy5s6aRbQaTDbgAvv1FXCGkRwiYuzVVdgC2stuQkEo4BrNph4uDSHQpQYTrNGMDN",
  "key13": "Jsp23VGQdEQgpGmKEkSq7Ku3ZzYyNJv4iNi8mSkfAGrdMg9TAtzLnTCiUSyeMVbPpruNytap3BdaQzQNPuCyZS6",
  "key14": "2hhBo8RGxCsmUumpgtBy2KVQcZmSc3BGXeJmqLjdk9houbkMbtcHhhRs5fZrEWnaKDiP295ZsGzRaFTPS3YyKY1D",
  "key15": "2piPLeqgBaAFudvbFbTf3xBhqGHDKwdNTi3StsSgaZBfNd5Xzv6jjBrUr4GPAUUKYmVvVpbQFng6g4cyXcSfRsLc",
  "key16": "61MUPssvLRBuiZppayaftYscDPYN72xGNe54SGDEVMSNgRAazHnVodmV6zx4V8zhsAtJXto7whtJtKTc8qacrHY2",
  "key17": "62d7GeBFB4fgnaWyvjdYCwFowaunTRjLQmzfWXT9SQzSFLXvqsaVyFqAyiEv3ZrtCQN2ztYKoT7NXUtQoz4iRzSG",
  "key18": "35xsomLwFGQeDk3ATj2wgKhatURKpPoujofbDDqAXpLDnNZ1EtjYVmARi8EcnPMSczMufqVD3ys5N55kiAbvbS2p",
  "key19": "2mUKycweTm1WcnjYbeNdmtZUZJ8XMUaTiMNynpDBcDMLNfFm4EXbjNGYARoRJXovpsGyJ7CVexkfcrTtsJJqskRV",
  "key20": "HgYeMQGkwqfLDtaQZ3JRCW1Pg8PgKs69ixqnUy9kM789g7tAkMqTEC6SB2G8bDGMsYxeJYNHnPxZA7n9xz3KypG",
  "key21": "5HoeUQmerqYUC6k4R3EcJrsLcNDWsNmdssTeT3w4RXwhmZH4yXfP3rGK5Ce5jTVonLzBf3Gn88Dms79BoQARNaf5",
  "key22": "54pk2j3yBwEfkQi5WAjW7SttwUtgaKied8bdFcW1i3DvrZqoDxaCgSqUgpFd2Tb7xPXiWrtSpNt9PwApR2zLSUKX",
  "key23": "3vRwxBPjXnHrXsRumuTyFaLh7SVfzoew3NrrwSiUiM5y5zc355ApWFPMV5Xbm5ztXA8JAcwPWo7kkJHvpdcRygZh",
  "key24": "3bth2cP4jkkJWqFpHTuMqAz6bSC87m3RJnFRwqmqaYeFcunieKppXizUFHC75SQ7gHSZiqV3S3Sh1LzofAksKT2G",
  "key25": "U2hnuz6poPZjsgq3HPZeWuk5spvFasD7nWAe8kfnSiduMjzQ5e2WAkfiztvGQrhm7UiL3UGw3J3W8RUJUpbq6kC",
  "key26": "4KkMWCDq7viboykh8UXnbc2dAabHoUYRd9Mx1Lqop1bUEoG4WhbGmvLUHW9HC7dP7MoEjRiknukVTz7HnPnYxMQ8",
  "key27": "GMoXcgk8uGqDfEc2vD42NAQPXNiwWttcGmD9bH8b2jeaUGw9EfVv4Yc38rykVNDU8yvbsnKfoFpXBWkeaVgM1nh",
  "key28": "ZTuAvxATbqmkpjzpAhy8nWQ9EkQPdvyA3FNRQUgt66KuAEMQ3MvafmkhBzBb5UwfJEC53cJPL3vfaLy5AqS4iZr",
  "key29": "3euyQ3usx1bnyrNwdtYeKf7pWwBQAuqcNEpDa2CoBRJvtpHYhpr8vdJLBt1beMFAhBhoKnSyrUQohYphEMGHpC7G",
  "key30": "3pB1tafDzSn2LwpHGnHVjJuNs1PfCD5c292Kegsx5pV5ZqjRTGJCCDVMTot3K5UJLrUe2DDDFfVoo3eTx2zDMvSx"
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
