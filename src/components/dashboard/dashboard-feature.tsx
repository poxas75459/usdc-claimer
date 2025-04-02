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
    "3RePB8qQ7MbX73KXTBUMzgwisxpZP3qBTPTpLTdFeC94iejXUArxT9omCBBmJSgUhf1ZDJyGqvqNfxwhAm5NuKKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDSdmXb7xxddC1F4Bb1dfAJjKLDY792ZCQZ3WkJCoK8Nu5HFehQCGr7JK2v61UshKseseSUx24ZJyoPaZYD28dm",
  "key1": "4p2zToCFdSvpzocePdy7okco8FnoHu6QuLuUVmrXKhck8RSmm7eoUX5G8xzjPTCtwPUYhGh3vwroupZj7vErFTdH",
  "key2": "2QsaXP7zw7JwD1L256sMjPQdSaDKbJ7mMzqn9VNbR1rDGN11DM3D5Zp75yggt7mKzYXG1E7uGBiDM6VxQbWL4CdH",
  "key3": "3nDMK1q3FJkJcNccSHQynHsuVW89Xf7tJz4uKncbJGNwad8P6TfMuifxhst3c76yz97sJpxSGD2bsSdmN4c1whja",
  "key4": "2QaGtm8pzbemJtGxgP29cGS5kzxvYU1gQHx8M9zasC6KBv2Bjof3WMMndQZivcWyzjbZS4cvzrf6h2Q6Cc4GZs37",
  "key5": "214aSY2Zpuf7a8CZwFuh1Wc2d6Uq5MXNxpZiGN8iBEWchE1GPora5fUvHkdMKZNiVrCZQUCMNG7Z7YfFQpJQg7NN",
  "key6": "31YAwVoUqhNFmhBxCASGs7axDZ9Hzjr2R1VtAPzrXMcvahyvHXhvmgRuPujJkP3P9igBeJXb8UUqdLg4x5W7HBYn",
  "key7": "2D11LNmKJuhjUWxjz5TSATsKStRp2V9fpbfG5bDtd6MKg6WTFvJdCJTUMpxtdWfCe85eeYJGHFVFsqcBryNJSxyG",
  "key8": "2Fd7ZcMbGa3K9iGbdkkWNfxf4RnL5u4HeK2at8iMP4nukUGQYjvd7ArmQnXRHW7ZUgcnnji2cB8ecYHbYndAUVyG",
  "key9": "5R6gDsEkYjfg2QJPc7n35FUkxNDDAuxDriEdub2evKyL2MjHW98fUJkAvRKQr7iZVswhCV8jmWUq9rYBUurPEqFq",
  "key10": "2zuysL3orsC9WySrnzwb3FfPjhQkuUNA3nKVqrEf4mRWh3cKmGtmwdRpu7LK35NB22Tm2DnL5oQ9vNyxFW6z2REG",
  "key11": "2NqTKPbE53Lgjf5yoDMJNMkVPb4rdijbH1Kr2ErKojjdgzvFV57oZvGD8LSvNBc17ZjuQE3c8oSV1Xf95zcatFUz",
  "key12": "3gQRKTRVEqBEX8SFZRXG4uhudBytZVCiAb9JZwDG6uoLLtLKejjsFhQQGJgTf78wqaN1NGNjuChdfM2gCRuBLruj",
  "key13": "3PsRKPuAHMpyGGu2pRy3oNcioqGBNnmUhDqMsStdvva88tydTQXa312Hu6NAGnCbCHWM5vPx486vYtRm1yeDS8Ev",
  "key14": "45SwvEASeMnAaUUu4NMtR2f7veLF7XWRC5Sekub6oN9T5pZqiiNRrgwmChCcBwi4WJSDPDx1wyoTSNP6GTQs22rw",
  "key15": "5ChjCPdDR7Y4rPnn2ruZCC4kMQswaS7p3ebxE692uM2zLxAxE2ZhHwmemFfYdYNGX93RQ77JHAUQVqqfsnC3dzoK",
  "key16": "3AWJQWo1BxeTQUHk4e9wgf6kvm4y9fcQjYAd8VVVxUa9ibxReow4Zdk6UEATnt9348A5TgQGdHpYNsGZ1CcrUykX",
  "key17": "2BEp2pZvgsb19fRHyeBHiQEhNT8m7DLdR9gvYcRNV61p6wyKoj8JXckXNAavqbfbcybH9gzdh68UNVPHFjJ5m3ko",
  "key18": "3QrWtSFX7dz2jhzFnW4wF3XDVq7YVJ8t8KQYwqzXkCzr8JxPw8oTwRtVPqEQe6KmvY3UCJfEP4ASWE8hwvXDzn2N",
  "key19": "38NZ6FHU5W6kZ1xgUxjHjfUmEuij7H3gAKJrxzh4ujU6JoDPA6zUhDZAVjwNvgELJuX2n1PYhMMVYq7EBFb6LHGo",
  "key20": "5AXG2RWopn8uknV7uz3sNUGCNLjmebkooUHwz1PVzytM1HmgAaGaHSW53dkgQbpM4EqFhuSZJf93vNAGsM7p8Vm3",
  "key21": "oVRcra2jp5BYt5a964RKqZb4Jc66f7itWPbywD5adudX2PNHKeLMe1gmPPA6yBJPVeQMDePE8ER4428bQ5hrX8E",
  "key22": "5Me9pmPhTCnqD1CQA15u1XcxjWefkLCPCP75j9w93KhNoTFSWphwDEhs4z3JdZi7KXYLwEpEMFjec4yAG16tsRCR",
  "key23": "5omqrspF6UKwFMoosXbz7o1Y5v1EaZxWEMFGF2c2TgCTNisDrpVCrGQWYBNLHhdQTnSNcXJmcgMqMD7xknamYYfa",
  "key24": "Rauxt6HByX4h3xSfkRromAHDuLJHbDCiDRrPA5fCqBqpqa1hwSb42FjRVHx6wfFpxTj4c6AvN2VhhJbZC2BqMLp",
  "key25": "3aw1zZ4zEWWLhx9gWnQzHsjH1yYNF1Dxwxh3DWtdZNLSrVyG3Mxf59tV4HxMjgEyqdEDC2ZS9QnxCCCrv5RfrKNq",
  "key26": "jCHr4M1Cgz6DNeiUJ3UuzTke5ZUtTiRiwoCBZcaEREsSDMYsUgcTo9L5kEgm1Vxz1sMGcoXFc9EuQwHqZjWHJJC",
  "key27": "3pCWmE2UdmJjXV3MQrNwPZMTCaR65ioH96pJs5E5RdZqJ4Xf6FWqpC7h4urhEphqXxvvXhLKXQdisMoEFmrsJycJ",
  "key28": "4Ve9VxQoncCN7VNfnFjTDFHpTj392xyiw5YPsLSbSGRBdTUBycwziqZJ13hFMtZr7tFF6xpoDTuRX8UruMC55X27",
  "key29": "mnpUx67jbnDJ1TUsPfu3EVcGf2DPDfPCNeVPL98o7tSXVzmzw3ykYvX7ZqpSeX4ZfckPY1rugiFegrttEgDhMs7",
  "key30": "3EdHuWrPTdLkRjGWtfiFgrjQ1WWTzEFNndr42nvvhk2p4tgR5TsLNfBKTw6mPErtbthKJu9UamXJNeECF9NwmCVN",
  "key31": "3ArNMH8EJZ5ZVLFR9gRxF8M7H394RWn6pXXGJSQx83j6eqqciXe5tSifboBRgCtJ2b7Wmgqkx4gEjbVZ1SoUUoQ7",
  "key32": "CXnjX1ZUFNchMAUXLRHKxewj5NekAJpPzxx3Q1Juy6iDTXY8XBqzoPSJEfKvUejVwECi8JHBJgCcH8oVn8hstJB"
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
