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
    "25CToeXaarkEnAwjKnaG9gxm2kiu3gbSZJKoVaQwKWDAH6LAfCKVhAMThXL7yyZpSHXMsBeeWG76hvFrxvLz2xV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DseZaZkfXDqvZP2wz1Nf5VL88Z5ACzJ4XYxZpjfUUGiN35vjZ8j9E1owdFKGGXzbAzy5XMdphEq5iiWYigAsgrP",
  "key1": "4vogzEwndccR9hs1pqqpesNPfQAszAyDhx2bCbyXjhMQHb2ivBG35NSczTNs3ndEpq4ueA3Eb5THcjwUm4c44ayn",
  "key2": "5ygYc6RMitpBTD3iJFTctfJzf5vNJotEuqWDiE6c5GX6xN1ZqjHVtRqhPpnJEU9B3JWMzxPvjxo7TZUDDg861a19",
  "key3": "4ycR9uRd7Y1kQdMfEUb5pdYeitV2n5TEmBSKFDjUTu5HfXsBj7YhPJcYZMuPFyGLvwHJUAd3iA3QP7bBDBRNj6ac",
  "key4": "23gV5WCTxg584MwKerLefSZeL8ua8E8d44ait1317yEvQw1z4XRSfoha4CMQDw7fETF7oFYqjgn9i6f79c7dvzCd",
  "key5": "42BrGZB6F2wjTkCfJRgSbZ8oLwVMzMuqfKaPYzwhmXVo3A5fkRKgWoTfoMbPp5jLRQvbnnu1E1Ujr19VdFsin7Dq",
  "key6": "LJqwZkeY74UFsth9KFGSqRci47Btg1ndGqG8cLyz2KSCr7x6Nk3Q9NXHV37Hw9EQuYTpP2BiycizpiyJg58kqqN",
  "key7": "37HDdjpdji8Hhe4WZ7qJtWVZzjkc3BZNdYgC9zRkAYpfZVm2dpiN2aSyccbErGoPwKYihv5xLDUhUQ8d7EXK31AQ",
  "key8": "wBHdWuT22AQMF8N85caqKvnFsqe1YUcgd1WQ7wTYYeKQ6qZvxJshBt9ZCFxVUWNcAeAfzPCWhoQ7cASpADaLUpE",
  "key9": "2THh2ttqMD8rX8wspfBVjNQreHpZLzK2KM32H5VmJ5sZa19FbHGEWCxP3QEwTdVTWFcywyZKXEhjZtnkXEtL2u3q",
  "key10": "49L9WFRpg95MVt1PxBedvTjUodyPaEwUxuEW9VnJj2eEmPeVhrhbbbveS1DTaHmqdNgF7anV9YL8uzjQhWju44xT",
  "key11": "bCDnEqbUmSs3DqHNvKRMWzvxVs77RHhnfLxZvMyCpJz8rqSqqZ7b3HDFKjVuesKQCfkVmGjP6Mr3nGUz1hrdFrH",
  "key12": "3QEtXYEoA85wsC9RBfGkgm59SHvhDC2g7ewHoY4DnVzeXBqKFdmeWx6YowZGYxc4vjuzsgtgkzdrep7boZAriAbS",
  "key13": "3LAQ4A6aGNeEZaoVDnerCrCuKdVk5w4wAF5YNcumg3KtUD1UeTaZsujE6kGJeQnk1kbGYgu22etLoTXMbhGaC7DZ",
  "key14": "3meRJzqLgroHAqSnmTGP9LB1zVY8LKBUxQa9aiQPhtpzBPUSvfDKEqeezTauyvbWpHRkyKfnzSsHVux6wxKBPD58",
  "key15": "65wA3QeoSqyqTrLNHCxnFRe8iEJFdAA1uKULgyzjMY3zpBCKiedfCWh1p3n29nmFQGvuCdRLGT4MekEhxgeGU2qp",
  "key16": "3EzywRqobijMFfnF3DgkSbNC8AvgRq2h4XqdvBEsDQkweV5vLWiQBkSbAWgoXaLnsJME7STx7iD8rMXmRCXPFRrD",
  "key17": "5VjkfU6a7jnGhScz9A8ByRKP3udofrP8UwTWHnyjXXxrKfn8Z86cu4xDXPeKiZKXg9PxcEDSem8gM4V7J2aJm3L5",
  "key18": "39NftTixePqHMpRisvaXkdwekj9u2FGJtr4Q5cH2m4p1NkGVphZbfyK8DiXhLrfqfPNb4D3dCS1AhdVG1c74RMEp",
  "key19": "kTQMpirUATCGxy2Pbsxj1oGbAPCydeVdCyeaGVfAfS18b9Wvm4Xi6sRM1fTRjoFGMtPFvCTJ7D6sBrGh3Jvh9pH",
  "key20": "3AHztFB4wnwciDFAQLb5SZ86htYE9JQYzbgtg6NDbrXGVHyop4x7VQ3KKxG39xsRp1yE2wKamHKzbUiuZGwytr7p",
  "key21": "2d3QBVQzVbbgwbfzdQwDYwc2Ph7EtdS9C3P6PZxWDBURvkfE3YdxTVj8Wuy77RNSn3vNKJ7AsqV1LFo3vkomshqa",
  "key22": "2F1mQDJWV5nC9NE7U9DeaRckQgU1hJ6LUg2pV1iiqoaQJHsACZ7KvzZ5hQoR1bmaAXxCBg7jhsqPVxkzFR2SKbg5",
  "key23": "yMA7C6w9EXAWaHmiq42KuuTniX9Tq2k7AW2NZRYziKKQSy2YiK7Lirs85z8iCGisU7uMmAK4RCacrj5pfDfUyph",
  "key24": "4FJ7rGJpfeCYEcD8W895QTP2rSgEzsycK3cEUjuX5sYokT7ej3Y9bgp4xDT1SXZkcp6qPcppy1uYNttqVCpDLjS8",
  "key25": "21zRB24D8JA7dTkthtvCp7GypPPaTsRWvgjZh9fr9WRVZ6owAZLAZiFyrCZFvzWtQKm6rSgCet5bA5H7yTh5CyaG",
  "key26": "52MVh21Cu17k2TfGgwSgRuHSaktKL5m7uztRYpswZeyPZWkCtRYDAu3QvRW4KGkLbacck8DWDqaxmBXbDZiXn8SN",
  "key27": "UgaJKCajY3xmNQhQixKJg5SDHVCkhgzYNUBBQgXpyL8G7qKk9bqKePDBHwU1YKzohN3X41U6mHGacYEE12YSKUM"
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
