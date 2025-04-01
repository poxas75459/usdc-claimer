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
    "3vxfpyTepGJYTE4PPoAkpW4ApWmSPRk8LZXBXoDcKjpds5L9bXoCa6MU35PeTanxP9fgCWuNgAR3tUSSHNpAM8YP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TZRuJdM4AZdKycpJVNUaJJZJuRLSj2yF3h3Ega9corTfxN7SVH3oYXbDkkijWUTC1QJ3LbJ1pViQfp3VvAm1md",
  "key1": "5EiK4rohu9BqXQLmkC1ykXKjNdhFjnsvnwF7kgUicR4uLEejmY1A1aR9bD9fXru1yYPBYsHvK3B7zjEdfA6kWrUx",
  "key2": "4RobJB4BhMzwoTBetxVoVfc9UnRZHpQU3Hejfmk8wEM4EtiRb8w8t6zyX7G9raS3UyG7nzejpwbYXfvj9zkZW9ML",
  "key3": "3bbRCJ6b2pL1oxkVwfkFcvobqBpE3RWjTaHkuHGrgtnbSWtf1ei7EcLE5jwrS4XrUVQdR1mAo1JbtHEriWYWxQ4m",
  "key4": "2Tve4WTSfqJUGTRsX7tY55azm64Qcnf4PrFC5zZ98u44Vnsdqg9xDFe7Fg5XtqsQMuoVNHupVAWpRdegS1BpPnVQ",
  "key5": "3Ks32EpHbEYquiL2A1eGEpmiiQLP4aTkmqm2jcdDrGCcQW6PoZL1p8ZsY2kXBmD6Fa85kTX82tzzLMRLUugsiq4t",
  "key6": "3G86vRKKu9swjr1AUDhHddQAA94eSSufmFbvzZGuQPAumDQiLFaz7KmtjHHFHsf9GGaoc7KeVNoHdXhrakWSZKqe",
  "key7": "2Xqd9GP41cJpJksJ74TtfrAPZhA4bUvq4VvNGmXoAxoKxSCGDT2kcbxdgXyNrggo8VneMk1o5qvvX228VgHx7DPZ",
  "key8": "5F1BwPf39eZDxePUVWPwFQLU4ZQXMcjT7GWTDddV3CTaoB29G95Eoy9eGYi4det1TFBqbXUe86WUcLpoisT3Y7Vn",
  "key9": "55qKw1LGZTTEe3FLVCtzw1LESVo58MumUrRtgoyX58QeYvFazuXcLKnKghSBRG67wvNSEC1DAWoVjchdXmwwEsX3",
  "key10": "2w5AdbWAbGPeqLWchGFnqqCWney8CG8EEeWyyg6QyGo53hfviSA8AsV3nDmtHbCJVymqRJWbkPVtRyhZnVsBx9Lq",
  "key11": "2EjbymahjGthhUFsnh7ak9gzMgjbUWp9GK3txk4J5qm4apMXNmJKTPuEhFh6BPi3utUHtpxMa6UXMPDPGSjHet9C",
  "key12": "5R9RGRStEJq7nLDERpr2ULNNMct8gC7CB2s1MmKk9H7r6eHuHYzdeUGs7aKg9QvrkdDqawm5uU21rbXmCdVrJkmF",
  "key13": "2FVaA2ugTpLEGHw7RyiGJrtWHmKwRqKnZqNViw8X7NzYyTShrvih19HeiNaJGFX1wKXZ86QEasahiyj5ejZWoyb8",
  "key14": "wmCEYNfAcfbcLw9FivHWstiXXEiHgoR6QwTiHS6b4jMtwdkyFnonUnFQUusDzwsVF65ZC6Ad2PEnMUjZuvotzbG",
  "key15": "3JvGy7MK8wRyKXRKCC71QRsG2MKybVkDdykbPN1AMRMHo2ZXe26BNap2CX7VhqjxUK21Vm4DSJE5eY5k5EDCgsJJ",
  "key16": "ouhz3YEiC5DbWs37iTqNziGqrQ63KAJJckXsKBXuZLE5VGjAvcuTFf6xG2415GuEGpDYnCL1cJH9EuN3YTst1cb",
  "key17": "3Xw6kusAM4ywFyA1EXbDH4oMWU4zMoBKZ3b5e8ibxqA1SH4T3gpqWcoKN9weatLsBkhXSaLbARszSTWVnTPmshj",
  "key18": "4iAXAnixEdwzcsaXWoUx3NU3zJK6UazQdTHmVcbG7eAbHahZCCMPdFi1385AR8sZKGZEeTmxofknosKG6yEcF2NS",
  "key19": "4Dhdvw66Q8aR3LgjQBzMrRKHBSLFyo2p2ZcBvDWp9jk7rG2EsPkYTNjuXgFSrEdEhb9xfC4J8oke4rdS1DPFyZFN",
  "key20": "27Lr1QRPCeqrbymjnRNUMHNvExrrndPXqz6LyVe9QKNzYrSHGq89oLrnX6wDoM3yNRKcEfVuGyB81Npq7vH1nqai",
  "key21": "2Gitw3JfDRMEmR7i4dQcUFjGr7ZUSKMdgeLuA5RYzgEYyrzsVcHMahsdehPoFHA85gQKW357K7ALoLAutVE43mUC",
  "key22": "3aWobwQmmymWC28QwLwHvhwSAR3taxDBvvfpisqbGkVQuPthcQPNLjav2DhijvNuoViYM24TGDVKcqRg2hM9qLpZ",
  "key23": "4UqBscCqzwaMSA6GAcNEifFYPQJu4bv3CXFvaxeoRg8QZxwf2pP2tfoxjyCDAAS3gcdTeX6Zit3J4e3AfAzvuuK9",
  "key24": "53PiK6cRpjNhB7ZUbGakBABizaPGWWaSvxqv6KdJoJgcFMpge2WctrnuCsMtaAMtehQLEGBtemcWzadb4q6EuxB7",
  "key25": "5RjvWWitQZMWcU1W8sJF6ZNtRvtQDhJwTuKiHXDdFDmVSXzDtnmSW4cAjMdQsxMj9q8GwVVscGXokXWBMeWZ4a8k",
  "key26": "4kY2pJ2vVphsoUpWrb3Zgz3UbV5jE9EkQmW8REQ8JiWdHtTDV2sgN6FjHvKQuqH1Y5Sui9DKNP2ufWyMzP2kmchX"
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
