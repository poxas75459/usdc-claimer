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
    "5RagWzBT42rz8TmwkU6LXfS4MGFniq5kaUYaKu51g1XqiTzBxocRgnuWmdPNTzoAAe3mGj8Wu6TWNbHWmBsnetPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnyAkUcAeC8KxYkNBhxfKzQRacmib9BT3dge6bgB2DVnw3bHkHMngUYkc6cJx1UUkC8cqSwj5MFqqsYx3Qt5T9c",
  "key1": "3ArfgfmQsUe7p7A7S7KTq8QPufGNsFjdPzJTmGBdUN56msoMdvPQiywgFgxVtaqTMvWc4gj6cPvZbyA6SqszjGs3",
  "key2": "4hcegoJj2ZsPJ4dBdb2yenqfswfHjhHoyRg2t8iFuxcVwDTGMwfCVWoiU2ZTbEqECLa6mrKhAYLs1b3ELSLUHpv3",
  "key3": "kk9wuHjWaDKTxBDAAGJdSp5hDTzjoebGGRuCZwpQvztn7f4Gk1KrNr4epPMQ437fsqrmgLxzbMLnwp9RDuJfhwY",
  "key4": "4mY9aifhXXHYPPAsegf4BNZTX2iSQyGdwACpu19DStjmkJGCmPukhhGrGx9Av75NF5t9KZsk6sVfGicNVcdpvAq4",
  "key5": "2vRxsUkpmzuF2AhkDTmWPcDPybR79jq5R4YFWpmSBHeBNqMpM5NFDSdwS3DBfSxfhuLtWQxw6QeNEn4DQukbSXLS",
  "key6": "4DDzAnv37x69YzZJjUC6Md5ETyQsWM5TUUkfXjTw6aXoizjLcK47XgJMRUNgLZeGCNxAHpGkcRCfgdZfQvnj3cqX",
  "key7": "3Aqxp7324oWWx5fysvDDac1pJDuaS4oCvT6xtwEpYMw5zWAwzuoQ4TnSmNVA4mpzYRz4K9VUyon3qZX8AbLgV92K",
  "key8": "5jTFGgquJE67iotJXAq1U8rY7qS2bxKQLdHSRvzGi7KX4bxtCkksNMoYE1wjQpXPHeTizUbYgrbM4xGWAgVUppyo",
  "key9": "2dLPwn8vhDe5g4aeZcbUx6ziQoSrrASoRdafJmXsL55Frwbck7BajsZHZofQn7XPeYd8fkrQgWeLaWC1AxDefqMn",
  "key10": "559f6rZ5H9hrnMYHXCwNR3qpMpCdw7tEqz7JE81FTUV7iFFVRpyoF66XM1fHDjeJFTy3Z1aBrV7njeuxveWeJJ7q",
  "key11": "56He4iVVecjTkQE2ujXr6WebhthFCHASoBpVtqBZ31JAmsRoQUXXB9TEtmmnymcxfpQn2pkuAjYk1XAJgDiMTmio",
  "key12": "wFgiRbXuQmf9YTmjQPPsCoRmoyoRvuvLhPLSC2fZ3W1J7v7QBt1raNLjEDGioy1djKqrfoSqdqzafhShjPjHgm4",
  "key13": "4mMsgdrVR4c5qgivQhfRRCnJDcjp1JgY3P5tuNirrcajaifHRK8cnPbGfzVTjPiUTyLMdcepBqaE5Ud4snAvURE1",
  "key14": "bXgLqMk8rX9q6HiP8RC9yh3GUZEev5utVBQwaiXNba6Gd1m4bctgUpFbZRLmSbk66HX5XrWHJA2feQVX8TfS3SE",
  "key15": "5EEnxPq4DFM3Lp1pVFdHAZFoipFbsWXApXYd8ayXD26GjVLL3nRQii39xepdeTLHbtGCJxiQyrgeZPKQwjfyuy8h",
  "key16": "3gEudMZE35gx1Zbt1ts3Q2641wkKv9muRgrdaAd1UupLFiC4Cpcvbemr6bYaxUiBhChvqe2b4xvdkb4wZctRL94y",
  "key17": "4zbrEFjjNwaXnHUCVMAXGkjoECntRDEcjnq62snrUWzSMAduzbDZu2EpxAKvoGhg3v1Q6uCjnio2TyVUy9PxXLie",
  "key18": "4o7ZMDFY5vi6s3eeF4WtybFfHKAgKig6zKFEAV9ePVMGk6aqLxL2xLykgWXYbZQ1iHnuXLKsFNUAFSdniAZqxPm",
  "key19": "5HU2D2u6wXT6Pw4DB34ZWXg9j5DjfUGZaWta9jXdarKBaZJjFBWKwYLwL2WNchtGJQDeUivejsbtMiC7Hwje4xJ1",
  "key20": "3ReYZBcGEGVsvdWMDNRefjByusyQk8fNQD7AXS7Lm42MbQk5ZNU8qqtENSBUigBVXDNRe9Y6UjSfq2WeporGdomB",
  "key21": "3w9aqmPwYs2YTfvQd8JLWSTpGrf3qPmfeToTK75PN3ndVhME4KbEGcBzWMJpjMnKiuUSFujXrHkz1Xc6tykQoZcb",
  "key22": "kkeaRt7naDZG7TUCLisLhbjQzwEdAUAUPhxH4RrE6qZR6UECwFSwdwLA4NYEpQ8qoRBYTDEQgR847zXAHLExgks",
  "key23": "2Eo9QyPctisGCPzMVz8KnMuNCdK1cjzSkGjUku4VbUBedPkbmhBzazLrEvvTynjapmzUURTwVBbkkSHY8uBbcNcZ",
  "key24": "rVH15GhgjeLXYDXLp6gP9iWeGAjCnyq2duqFvtVBaamTLrFJX2QoKrJ37xJZguhGthLB2kdB5VKtawLupZ9apfW",
  "key25": "4CeWAMsZJyhCri8R36DdeP2CBn6FGBJKZSNNcsutekfCSH7md72xSpw8rRyi2bqZNktjhf5p6sX1eMcMPNiRsuUB",
  "key26": "2zz4SDaHaECBE2WCNbN6gcyFXAL6LFxVvKoeq3xWkQgtEB115fZzEhXXyJn9jSs1b7aphEqeCa7XiYrhvXqqLT3F",
  "key27": "Kt7bMp2nFp5JAz9LExZkhVu2Bqo7Fj2nD6yHV2idaw6qj533gnaDP5MuKmHYstA1VEmT7NWPaTCzLYajhn9AZBm",
  "key28": "Gp9RXrH4gffDTQDXkv5CETQAQh4UTi8m26A8iy1BN8aCYYXjeCohHGmtMbAAs6rurYPLygMBzpRfE2bw4nRchsR",
  "key29": "4nfxQ3C3RvKds5w5jH5MBbe9LXAeNtbQeJBbDsHtyDLb11MzejjHdnAzeuF8Rin7oPKw3Tjn7LBegX74R7eNHKu",
  "key30": "51q9SEk3TBq3zWEaJY2Cm65wRPS4eAJ5K8uepDUNNcUcPiM3URq7tTNU3gvQkJFsM1412k5sDc3T4hxoudTQmmY4",
  "key31": "39dRH25pgeY6GwbGhC7QcUzfe53KP6U9XF2zW6bgr3V5sMnia2kiCfdxK3k1DoB2Dz124RniTtyMRJ8Gbhg8n4dD",
  "key32": "3YQmaeTLgfuME4RgAnD1GUbGF4JUYbvwADh5RXZC5dW3QLzDukwtf8cNBLxdC4a3Cg3rrRapJWUbSTdNjvLmvrEz",
  "key33": "3CYC7JuYb99tfKPGyE7ha5FiEEEXitZGnk6Gg32NJPex5pPJqYBiTrwmtFLrEE9VbMnAj5tN5RXcEueYgmRXnaHN"
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
